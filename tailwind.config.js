export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nf: {
          green: "#2D6A4F",
          greenSoft: "#74C69D",
          greenPale: "#D8F3DC",
          cream: "#FBFBF8",
          beige: "#F0EDE5",
          ink: "#1B2B24",
          gray: "#5A6B63",
          line: "#E4E8E3"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"]
      },
      borderRadius: {
        card: "16px",
        pill: "999px"
      },
      boxShadow: {
        soft: "0 4px 20px rgba(27, 43, 36, 0.06)",
        lift: "0 8px 30px rgba(27, 43, 36, 0.10)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both"
      }
    }
  },
  plugins: []
};
