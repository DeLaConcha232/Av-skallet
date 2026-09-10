/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        cream: "#f6f4ef",
        ink: {
          DEFAULT: "#1c1c1a",
          soft: "#2f2e28",
        },
        border: {
          DEFAULT: "#e2ded3",
          strong: "#d6d1c3",
          dark: "#3a3934",
        },
        muted: {
          DEFAULT: "#6b6a63",
          dark: "#55534c",
          darker: "#47453f",
          light: "#a8a599",
        },
        accent: {
          DEFAULT: "var(--accent)",
          ink: "#142016",
        },
      },
      fontFamily: {
        sans: ['"Public Sans"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
