/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4A1B9E",
          50: "#F3EDFB",
          100: "#E4D6F5",
          200: "#C7ACEB",
          300: "#A981E0",
          400: "#8B57D6",
          500: "#6E36C4",
          600: "#4A1B9E",
          700: "#3B1580",
          800: "#2C1061",
          900: "#1D0A43",
        },
        teal: {
          DEFAULT: "#4ECDC4",
          50: "#EEFBFA",
          100: "#D3F4F1",
          400: "#4ECDC4",
          500: "#33B6AC",
          600: "#279189",
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
