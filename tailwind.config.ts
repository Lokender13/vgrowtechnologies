import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0a1325",
          dark: "#040812",
          surface: "#0e1a32",
          card: "#12203e",
          border: "#1d2e54",
          orange: "#F7660D",
          "orange-hover": "#E05505",
          "orange-light": "#FFF3EB",
          cyan: "#00C2FF",
          blue: "#142039",
          slate: "#586172",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        display: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "glow-slow": "glow 8s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(20px)" },
          "100%": { opacity: "0.8", filter: "blur(32px)" },
        },
      },
      boxShadow: {
        "orange-glow": "0 0 25px -5px rgba(247, 102, 13, 0.35)",
        "blue-glow": "0 0 25px -5px rgba(0, 194, 255, 0.25)",
        "card-subtle": "0 10px 30px -10px rgba(2, 12, 41, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
