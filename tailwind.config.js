/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        bg: "#F0F1F3",
        textColor: '#111',
        secondary:"#646464"
      }
    },
  },
  plugins: [],
}

