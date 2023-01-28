/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(209, 23%, 22%)",
        VeryDarkBlue: "hsl(207, 26%, 17%)",
        VeryDarkBlue2: "hsl(200, 15%, 8%)",
        DarkGray: "hsl(0, 0%, 52%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontFamily: ["Nunito Sans", "sans-serif"],
      borderColor: {
        borderLight: "hsl(200, 15%, 8%) hsl(200, 15%, 8%) transparent",
      },
    },
  },
  plugins: [],
};
