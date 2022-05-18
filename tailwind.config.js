const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      red: colors.red,
      green: colors.emerald,
      gray: colors.gray,
      indigo: colors.indigo,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
