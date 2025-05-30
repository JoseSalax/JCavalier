/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#101820',     // fondo oscuro principal
        secondary: '#FEE715',   // amarillo brillante usado como acento
        neutral: '#F4F4F4',     // gris claro de fondo
        accent: '#E94560',      // color vibrante para botones
        soft: '#fdfdfd',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        xl: '1.5rem',
      },
      boxShadow: {
        soft: '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};
