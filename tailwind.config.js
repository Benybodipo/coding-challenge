/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-banner": "#364935"
      } 
    },
    fontFamily: {
      'source-serif': ["'Source Serif 4'", 'serif'],
      'oswald': ['Oswald', 'sans-serif']
    }
  },
  plugins: [],
}

