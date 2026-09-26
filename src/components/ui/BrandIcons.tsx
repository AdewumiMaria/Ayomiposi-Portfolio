// NOTE: lucide-react v1 dropped its brand icons, so GitHub and LinkedIn are
// inlined here. They take the same `className` sizing as a lucide icon
// (`size-5`, `text-royal`) and inherit colour via `currentColor`.

type BrandIconProps = {
  className?: string;
};

export function GithubIcon({ className }: BrandIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-1.9c-3.08.67-3.73-1.32-3.73-1.32-.5-1.29-1.23-1.63-1.23-1.63-1-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.38-1.21.7-1.49-2.46-.28-5.05-1.24-5.05-5.5 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .93-.3 3.06 1.14a10.5 10.5 0 0 1 5.58 0c2.13-1.44 3.06-1.14 3.06-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.07 5.49.4.34.75 1.02.75 2.06v3.05c0 .3.2.64.76.53a11.11 11.11 0 0 0 7.56-10.53C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: BrandIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
