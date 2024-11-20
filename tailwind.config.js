/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This should include all paths where you use Tailwind classes
  ],
  theme: {
    extend: {

      colors: {
        tailwindLogo: "#00aacd",
        htmlLogo: "#FF5733",
        rStudioLogo: "#4AA4DE",
        cssLogo: "#2965f1",
        javascriptLogo: "#F0DB4F",
      },
      scale: {
        '100': '1',
        '200': '2',
        '250': '2.5',
        '300': '3',
        '350': '3.5',
        '400': '4',
      },

      
      
    },
  },
  plugins: [],
}

