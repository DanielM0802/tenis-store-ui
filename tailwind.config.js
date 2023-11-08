/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors : {
      'rojo': '#B81313',
    },
    fontFamily : {
      // 'sans': ['"Encode Sans"', 'sans-serif'],
    }
  },
  plugins: [],
});