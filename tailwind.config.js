/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "header": "0px 2px 4px 0px #0000000E;",
        "card": "0px 0px 7px 2px #00000008;"
      }
    },
  },
  plugins: [],
}