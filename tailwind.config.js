/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      blue: colors.blue,
      black: "#000",
      accent: {
        100: "hsl(199, 40%, 90%)",
        200: "hsl(199, 50%, 85%)",
        300: "hsl(199, 45%, 80%)",
        400: "hsl(199, 40%, 50%)",
        500: "hsl(199, 35%, 40%)",
        600: "hsl(199, 35%, 30%)",
        700: "hsl(199, 35%, 20%)",
        800: "hsl(199, 35%, 20%)",
      },
    },
    extend: {},
  },
  plugins: [],
}
