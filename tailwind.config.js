/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A1B9E",
          50: "#f3eefc",
          100: "#f3eefc",
          200: "#e4d8f7",
          300: "#c6afee",
          400: "#a382e0",
          500: "#7c4fca",
          600: "#4A1B9E",
          700: "#3f1786",
          800: "#351470",
          900: "#1f0c42",
        },
        brandBlue: {
          DEFAULT: "#2C6BEF",
          50: "#EAF2FF",
          100: "#D9E8FF",
          200: "#B9D5FF",
          300: "#8FB8FF",
          400: "#2C6BEF",
          500: "#2359D9",
          600: "#1D4FB6",
          700: "#163D8D",
          800: "#102B69",
          900: "#0E224D",
        },
        teal: {
          DEFAULT: "#45b7a6",
          50: "#e8f7f4",
          100: "#e8f7f4",
          400: "#45b7a6",
          500: "#2f9686",
          600: "#1c5b52",
        },
        ink: "#14121F",
        paper: "#F6F5F9",
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Barlow'", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
      },
    },
  },
  plugins: [],
}
