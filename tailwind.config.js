/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      veryDarkBlue: "hsl(233, 47%, 7%)",
      darkDesaturatedBlue: "hsl(244, 38%, 16%)",
      accent: "hsl(277, 64%, 61%)",
      headingClr: "hsl(0, 0%, 100%)",
      paragraphClr: "hsla(0, 0%, 100%, 0.75)",
      statsClr: "hsla(0, 0%, 100%, 0.6)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lexendDeca: ["Lexend Deca", "serif"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
