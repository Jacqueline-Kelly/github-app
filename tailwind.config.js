/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
