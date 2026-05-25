const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', ...fontFamily.sans],
        sans: ['DM Sans Variable', ...fontFamily.sans],
      },
      colors: {
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}
