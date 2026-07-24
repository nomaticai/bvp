import type { Config } from "tailwindcss";

/**
 * Design tokens are the source of truth from the Google Stitch exports
 * (Homepage + Property Detail) and D:\bvp\DESIGN.md ("Coastal Refinement").
 *
 * Two color layers are defined intentionally (confirmed with client):
 *   1. The full Material-3 token set the Stitch HTML actually renders with —
 *      required for pixel-for-pixel fidelity (e.g. `primary` is #123355, and
 *      the brief's "navy #2C4A6D" is `primary-container`).
 *   2. Named brand aliases from Section 3 of the technical brief so the six
 *      documented brand tokens exist as first-class utilities too.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ---- Material-3 token set (from Stitch config) ----
        primary: "#123355",
        "on-primary": "#ffffff",
        "primary-container": "#2c4a6d",
        "on-primary-container": "#9cbae2",
        "primary-fixed": "#d2e4ff",
        "primary-fixed-dim": "#abc9f2",
        "on-primary-fixed": "#001c37",
        "on-primary-fixed-variant": "#2a486b",
        "inverse-primary": "#abc9f2",
        secondary: "#366094",
        "on-secondary": "#ffffff",
        "secondary-container": "#9cc3fe",
        "on-secondary-container": "#245084",
        "secondary-fixed": "#d4e3ff",
        "secondary-fixed-dim": "#a5c8ff",
        "on-secondary-fixed": "#001c3a",
        "on-secondary-fixed-variant": "#1a487b",
        tertiary: "#0a3359",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#274a71",
        "on-tertiary-container": "#98bae7",
        "tertiary-fixed": "#d2e4ff",
        "tertiary-fixed-dim": "#a7c9f7",
        "on-tertiary-fixed": "#001c37",
        "on-tertiary-fixed-variant": "#25486f",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        background: "#f7f9ff",
        "on-background": "#031d31",
        surface: "#f7f9ff",
        "on-surface": "#031d31",
        "on-surface-variant": "#43474e",
        "surface-variant": "#cee5ff",
        "surface-dim": "#c5dcf8",
        "surface-bright": "#f7f9ff",
        "surface-tint": "#436084",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#edf4ff",
        "surface-container": "#e3efff",
        "surface-container-high": "#d9eaff",
        "surface-container-highest": "#cee5ff",
        "inverse-surface": "#1b3247",
        "inverse-on-surface": "#e8f2ff",
        outline: "#73777f",
        "outline-variant": "#c3c6cf",

        // ---- Named brand aliases (Section 3 of the technical brief) ----
        navy: "#2c4a6d",
        "steel-blue": "#4a72a8",
        "sky-blue": "#7e9fcb",
        periwinkle: "#b7c8e3",
        "slate-gray": "#7c93ac",
        "whatsapp-green": "#25d366",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "12px",
        "2xl": "16px",
        full: "9999px",
      },
      spacing: {
        base: "8px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
        "container-max": "1280px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        "display-lg": ["var(--font-playfair)", "Playfair Display", "serif"],
        "headline-md": ["var(--font-playfair)", "Playfair Display", "serif"],
        "headline-sm": ["var(--font-playfair)", "Playfair Display", "serif"],
        "body-lg": ["var(--font-inter)", "Inter", "sans-serif"],
        "body-md": ["var(--font-inter)", "Inter", "sans-serif"],
        "label-md": ["var(--font-inter)", "Inter", "sans-serif"],
        caption: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "48px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg-mobile": [
          "32px",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": [
          "14px",
          { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" },
        ],
        caption: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },
      boxShadow: {
        // Level 1 (cards) and Level 2 (hover) — blue-tinted ambient shadows.
        card: "0 4px 20px rgba(44, 74, 109, 0.05)",
        "card-hover": "0 8px 30px rgba(44, 74, 109, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
