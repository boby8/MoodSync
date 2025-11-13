import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        serene: {
          background: "#f5f7fb",
          surface: "#ffffff",
          foreground: "#1f2933",
          muted: "#64748b",
          accent: "#6366f1",
          ring: "#c7d2fe",
        },
        midnight: {
          background: "#0f172a",
          surface: "#111827",
          foreground: "#e2e8f0",
          muted: "#94a3b8",
          accent: "#38bdf8",
          ring: "#1e3a8a",
        },
        zen: {
          background: "#f0fdfa",
          surface: "#ffffff",
          foreground: "#064e3b",
          muted: "#0f766e",
          accent: "#14b8a6",
          ring: "#5eead4",
        },
        vibrant: {
          background: "#fff7ed",
          surface: "#fff0d6",
          foreground: "#7c2d12",
          muted: "#b45309",
          accent: "#f59e0b",
          ring: "#f97316",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", ...defaultTheme.fontFamily.sans],
        display: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: "0 24px 48px -32px rgba(15, 23, 42, 0.32)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      transitionDuration: {
        350: "350ms",
      },
    },
  },
  plugins: [],
};