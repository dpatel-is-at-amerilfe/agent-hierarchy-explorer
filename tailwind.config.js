/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        abyss: "#070A14",
        line: "rgba(120,150,200,0.12)",
        glass: "rgba(13,18,32,0.74)",
        neon: {
          affiliate: "#4F8BFF",
          carrier: "#E84FD6",
          teal: "#2DE2C8",
          cyan: "#22D3EE",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
