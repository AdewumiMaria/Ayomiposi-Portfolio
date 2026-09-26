import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merges conditional class lists and lets a caller's `className` win over a
// component's defaults (e.g. passing `p-0` to a Card that defaults to `p-6`).
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
