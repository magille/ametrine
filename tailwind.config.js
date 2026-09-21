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
          DEFAULT: "#55C6B4",
          50: "#ECFAF7",
          100: "#D9F3EE",
          200: "#B5E7DD",
          300: "#87D8CA",
          400: "#55C6B4",
          500: "#3BAE9C",
          600: "#2F8F82",
          700: "#267267",
          800: "#1D554E",
          900: "#143B37",
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
