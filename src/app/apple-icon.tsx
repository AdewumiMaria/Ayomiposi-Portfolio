import { ImageResponse } from "next/og";

// ─── Home-screen icon for iOS ─────────────────────────────────────────────────
// NOTE: apple-icon must be a raster image (iOS ignores SVG), so this renders the
// same monogram as app/icon.svg into a PNG at build time. Keep the two in sync.

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4169e1",
        }}
      >
        {/* Same 32-unit drawing as icon.svg, scaled — iOS rounds the corners itself. */}
        <svg width="150" height="150" viewBox="0 0 32 32">
          <path
            d="M8.5 23.5V9.5L15.5 17L22.5 9.5V23.5"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <circle cx="27" cy="5" r="2.2" fill="#12a672" />
        </svg>
      </div>
    ),
    size,
  );
}
