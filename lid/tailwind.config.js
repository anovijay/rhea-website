const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces Variable', ...fontFamily.serif],
        sans: ['Outfit Variable', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
