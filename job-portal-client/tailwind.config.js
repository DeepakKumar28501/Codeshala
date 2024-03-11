/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        orange: "#c2410c",
        orange_lg: "#c2410c",
      },
      fontFamily:{
        "clash":['ClashDisplay']
      }
    },
  },
  plugins: [],
}

