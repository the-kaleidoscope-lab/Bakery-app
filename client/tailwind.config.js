/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: "#3b251a",
        caramel: "#a67c52",
        vanilla: "#f8f0e5",
        rose: "#f5d2c6",
        pistachio: "#dce8d3",
        mocha: "#6f4e37"
      },
      boxShadow: {
        warm: "0 12px 30px rgba(59, 37, 26, 0.18)"
      }
    }
  },
  plugins: []
};
