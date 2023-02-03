/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thBlue: "#4FFF33",
        thOrange: " #C70039",
        thPurple: "#ED02FF",
      },
    },
  },
  plugins: [],
};
