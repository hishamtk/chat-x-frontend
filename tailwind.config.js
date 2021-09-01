// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      pc: "1450px",
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        white: {
          50: "#fefffe",
          150: "#4f4f4f",
          250: "#d7dce1",
          350: "rgb(127, 139, 153)",
          450: "rgb(235, 238, 241)",
          550: "rgb(104, 109, 115)",
          650: "rgb(228, 228, 231)",
        },
        red: {
          50: "#DA0037",
        },
        green: {
          50: "rgb(40, 191, 123)",
        },
        iceberg: {
          DEFAULT: "#DFF4F3",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#DFF4F3",
          600: "#B9E7E5",
          700: "#93DAD7",
          800: "#6DCDC8",
          900: "#47C0BA",
        },
        "black-squeeze": {
          DEFAULT: "#DDE7F2",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#DDE7F2",
          600: "#B8CDE4",
          700: "#93B3D6",
          800: "#6E99C8",
          900: "#497FBA",
        },
        "pigeon-post": {
          DEFAULT: "#B9BBDF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#DCDDEF",
          500: "#B9BBDF",
          600: "#9699CF",
          700: "#7377BF",
          800: "#5055AF",
          900: "#40448C",
        },
        "polo-blue": {
          DEFAULT: "#878ECD",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F3F4FA",
          300: "#CFD2EB",
          400: "#ABB0DC",
          500: "#878ECD",
          600: "#636CBE",
          700: "#4650A8",
          800: "#373F84",
          900: "#282E60",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
     // ...
     require('@tailwindcss/line-clamp'),
  ],
};
