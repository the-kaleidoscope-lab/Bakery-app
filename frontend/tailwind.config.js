/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        bakery: {
          50: "#fff8f0",
          100: "#fcefe1",
          200: "#f6d6b7",
          300: "#e9b68c",
          400: "#db9566",
          500: "#c77b4b",
          600: "#a45f36",
          700: "#7f4526",
          800: "#5a2f1a",
          900: "#3c1f11"
        },
        cream: {
          100: "#fffaf5",
          200: "#fdf3e6",
          300: "#fbe6cf"
        },
        pastel: {
          pink: "#f8d7da",
          mint: "#d8f3dc",
          lilac: "#e4d7f5",
          peach: "#f7d9c4"
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Nunito'", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(79, 49, 28, 0.12)"
      }
    }
  },
  plugins: []
};
