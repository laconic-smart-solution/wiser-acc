/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0E2A47',
          900: '#0B1C2D',
          950: '#071524'
        },
        ocean: {
          500: '#1877F2',
          600: '#1565C0',
          700: '#0D47A1'
        },
        teal: {
          400: '#2DD4BF',
          500: '#18C7B7',
          600: '#0D9488'
        },
        gold: {
          400: '#FBBF24',
          500: '#D4AF37',
          600: '#B45309'
        },
        pearl: '#F8FAFC'
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
}
