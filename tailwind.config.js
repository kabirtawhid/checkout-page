/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{.html,.js}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },

    extend: {
      colors: {
        "dark-1": "#4E5150",
        "gray-1": "#333333",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        orange: "#F2994A",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
