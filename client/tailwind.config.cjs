/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"],
  theme: {
    extend: {
      "boxShadow": {
        'costom': "0 0 0 3px rgba(178,178,178,0.264)"
      },
      "fontSize": {
        'xxl': '1.75rem'
      },
      colors: {
        "black": {
          "900": "#000"
        },
      },
    },
  },
  plugins: [],
};