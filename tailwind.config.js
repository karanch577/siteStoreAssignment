/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        objectSans: ["Object Sans", "sans-serif"],
      },
      colors: {
        "primary-black": "#020202",
        "primary-white": "#ECECEC",
        "primary-gray": "#7E7E7E"
      },
    },
  },
  plugins: [],
}