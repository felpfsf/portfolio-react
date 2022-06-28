/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teste: {
          teste1: '#313638'
        },
        palette1: {
          fireOpal: '#EF6461',
          sunray: '#E4B363',
          platinum: '#E8E9EB',
          alabaster: '#E0DFD5',
          onyx: '#313638',
          grayBlue: '#1A2E40'
        }
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        cursive: ['Alex Brush', 'cursive']
      }
    }
  },
  plugins: []
}
