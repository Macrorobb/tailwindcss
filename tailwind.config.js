const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8"
        },
        // brand: "#0fa9e6",
        // "brand-light": "#3fbaeb",
        // "brand-dark": "#0c87b8"
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        cyan: colors.cyan,
        teal: colors.teal
      },
      fontFamily: {
        headlind: "Poppins, sand-serif" // font-headline
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      fontSize: ["hover"],
    },
  },
  plugins: [],
};
