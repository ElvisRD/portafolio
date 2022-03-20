module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      Title: "'Roboto Condensed', sans-serif",
      Text: "'Nunito', sans-serif;"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
