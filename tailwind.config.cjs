/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'raleway' : ['Raleway', 'sans-serif']
      }, 
      colors : {
        'primary' : '#F9C56A',
        'secondary' : '#A8A8A8'
      }
    },
  },
  plugins: [],
}
