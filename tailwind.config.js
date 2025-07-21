/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
     fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        aleo: ['Aleo', 'sans-serif']
     },
     colors: {
        'rc-bg': '#fdf1ea',
        'rc-orange': '#d25d19',
      }
    },
  },
  plugins: [],
}

