// ─── Theme constants shared by the server layout and the client provider ──────
// NOTE: These must live outside ThemeProvider.tsx. Importing a value from a
// "use client" module into a server component yields a client-reference stub, not
// the value — interpolating that into the inline theme script produced a script
// that threw "Attempted to call THEME_STORAGE_KEY() from the server".

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "maria-theme";

/** Fired after a tab changes the theme, so every subscriber re-reads the DOM. */
export const THEME_CHANGE_EVENT = "maria-theme-change";
