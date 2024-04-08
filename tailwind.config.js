/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sxm: "0px",
      shm: "340px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    colors: {
      purple: "#7C5DFA",
      purpleLight: "#9277FF",
      darkBlue: "#1E2139",
      lightBlue: "#252945",
      lightGray: "#DFE3FA",
      gray: "#888EB0",
      blue: "#7E88C3",
      black: "#0C0E16",
      orange: "#EC5757",
      bg: "#373B53",
      ligthOrange: "#9277FF",
      lightBG: "#F8F8FB",
      calc: "#F9FAFE",
      hover: "#FF9797",
      dark: "#141625",
      border: "#494E6E",
      white: "#fff",
      special: "#858BB2",
      pending: "rgba(255,143,0,0.1)",
      paid: "rgba(51,214,159,0.1)",
      draft: "rgba(55,59,83,0.1)",
      secondary: "#777F98",
    },
    extend: {
      boxShadow: {
        xl: "1px rgba(72, 84, 159, 0.25)",
      },
      translate: "",
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [],
};
