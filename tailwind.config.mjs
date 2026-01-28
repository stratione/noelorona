/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Source Serif 4", "Georgia", "serif"],
        sans: ["Source Sans 3", "Helvetica Neue", "sans-serif"]
      },
      colors: {
        ink: "#e6edf3",
        slate: "#9aa7b5",
        parchment: "#0b0f14",
        marigold: "#c9a227",
        haze: "#121a23"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "soft-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "soft-bounce": "soft-bounce 1.6s ease-in-out infinite"
      },
      boxShadow: {
        soft: "0 12px 30px -18px rgba(26, 26, 26, 0.35)"
      }
    }
  },
  plugins: []
};
