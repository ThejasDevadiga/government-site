/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgWhite: "#f1f5fd",
      yellow: "#FFC436",
      grey: "#828286",
      black: "#333333",
      lightyellow:"#FFF0CE",
      green:"#0A6847",
      lightgreen:"#7ABA78"
    },
  },
  // plugins: [require("daisyui")],
};
