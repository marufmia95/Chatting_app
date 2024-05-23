/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#00B8A9',
        'secondary' : '#F8F3D4',
        'tertiary' : '#3468C0',
        'fourth' : '#F6416C',
        'fiveth' : '#FFFFFF',
        'sixth' : '#182EF3',
        'siven' : '#F72798'
      },
    // font-family: {['Gamja Flower', sans-serif;]
      font_family:{
      'gamja_lower': ['Gamja Flower', "sans-serif"],
      },
      fontfamily:{
      'poppins': ['Poppins', "sans-serif"],
      },
    },
  },
  plugins: [],
}