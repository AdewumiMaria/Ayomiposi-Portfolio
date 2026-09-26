"use client";

import { createContext, useCallback, useMemo, useSyncExternalStore } from "react";
import {
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/constants/theme";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (nextTheme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

// ─── The external store: the `dark` class on <html> ───────────────────────────
// NOTE: The class is the single source of truth, not component state. The inline
// script in layout.tsx sets it before React runs, so keeping a second copy in
// useState would mean syncing it back in an effect — which is both a cascading
// render and a hydration mismatch waiting to happen.

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  // Keeps native widgets (scrollbars, form controls) in step with the palette.
  root.style.colorScheme = theme;
};

const readStoredTheme = (value: string | null): Theme | null =>
  value === "dark" || value === "light" ? value : null;

const getThemeSnapshot = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

// There is no DOM to read while rendering on the server. The inline script fixes
// <html> before hydration, so this only ever describes the very first pass.
const getServerThemeSnapshot = (): Theme => "light";

const subscribeToTheme = (onThemeChange: () => void) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // Follow the OS only while the visitor has not made an explicit choice.
  const handleSystemChange = (event: MediaQueryListEvent) => {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return;

    applyTheme(event.matches ? "dark" : "light");
    onThemeChange();
  };

  // Another tab toggled the theme — mirror it here.
  const handleStorageChange = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;

    const storedTheme = readStoredTheme(event.newValue);
    if (!storedTheme) return;

    applyTheme(storedTheme);
    onThemeChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
  window.addEventListener("storage", handleStorageChange);
  darkQuery.addEventListener("change", handleSystemChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
    window.removeEventListener("storage", handleStorageChange);
    darkQuery.removeEventListener("change", handleSystemChange);
  };
};

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const setTheme = useCallback((nextTheme: Theme) => {
    applyTheme(nextTheme);

    // Private browsing and blocked site data both throw here; the toggle should
    // still work for the rest of the visit even when nothing can be persisted.
    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignored on purpose.
    }

    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(getThemeSnapshot() === "dark" ? "light" : "dark");
  }, [setTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
