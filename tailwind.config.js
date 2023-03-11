/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'def': '0 5px 20px rgb(0, 0, 0, 0.08)'
      },
      borderWidth:{
        '1': '1px'
      },
      borderColor:{
        'card': 'rgb(0, 0, 0, 0.08)'
      }
    },
  },
  plugins: [],
}
