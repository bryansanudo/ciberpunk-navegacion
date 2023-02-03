/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        thBlue: "#4FFF33",
        thOrange: "#F9A23F",
        thPurple: "#ED02FF",
      },
    },
  },
  plugins: [],
};
