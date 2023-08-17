/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./js/*.js", "./*.html"],
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
      screens: {
        sm: "360px",
        "sm-2": "390px",
        tb: "700px",
        md: "900px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
