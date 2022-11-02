/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robcon: ["Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
