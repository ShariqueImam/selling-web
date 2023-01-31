module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "550px",
      md: "900px",
      lg: "1400px",
      xl: "1800px",
    },

    extend: {
      colors: {
        primary: "#ffb900",
        secondary: "#535353",
        black: "#1f2937",
      },
    },
  },
};
