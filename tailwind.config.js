/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur.png)",
        mockup: "url(/src/assets/code-mockup.png)",
      },
      fontFamily: {
        sans: "Roboto , sans-serif",
      },
      colors: {
        blue: {
          200: "#81D8F7",
          300: "#0088B3",
          500: "#005687",
          700: "#01325F",
        },
        green: {
          500: "#00B37E",
        },
        orange: {
          500: "#FBA94C",
        },
        red: {
          500: "#F75A68",
        },
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          500: "#323238",
          600: "#29292E",
          700: "#121214",
          900: "#09090A",
        },
      },
    },
  },
  plugins: [],
};
