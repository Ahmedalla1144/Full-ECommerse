/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '540px'
      },
      colors: {
        "white-color": "#FAFAFA",
        "black-color": "#000000",
        navbar: "#D9D9D9",
        secondary: "#DB4444",
        thirdcolor : '#F9F9F9'
      },
    },
  },
  plugins: [],
};
