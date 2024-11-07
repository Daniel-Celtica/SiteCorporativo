/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      'aqua': "#31C5C7"
    },
    extend: {
      fontFamily: {
        sans: ['"Maven Pro"', 'sans-serif'],
      },
      
    },

  },
  plugins: [],
});
