/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        espresso: "#2B1B16",
        cocoa: "#65463A",
        warmWhite: "#FAF7F2",
        latte: "#E9DDCF",
        signatureBlue: "#3F5792",
      },
    },
  },

  plugins: [],
};