import { Geist, JetBrains_Mono } from "next/font/google";

// NOTE: The old markup used `font-[JetBrains Mono]`, which Tailwind cannot parse —
// arbitrary values may not contain spaces — so every "mono" heading silently fell
// back to Arial. The family is loaded properly here and used via `font-mono`.

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});
