/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: "#A2B06D",
        darkOlive: "#7A864B",
        beige: "#E1CAAD",
      },
    },
  },
  plugins: [],
}