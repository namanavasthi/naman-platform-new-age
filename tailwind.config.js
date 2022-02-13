const defaultTheme = require("./src/theme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      ...defaultTheme,
    },
  },
  plugins: [],
};
