/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#423F71',
        header: '#293841',
        body: '#1C1B29',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
