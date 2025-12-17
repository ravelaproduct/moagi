/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moagi-white': '#FFFFFF',
        // Moagi Teal - Primary color from logo (#0F6C8C)
        'moagi-teal': {
          50: '#e6f4f7',
          100: '#cce9ef',
          200: '#99d3df',
          300: '#66bdcf',
          400: '#33a7bf',
          500: '#0F6C8C', // Main logo color
          600: '#0c5670',
          700: '#094154',
          800: '#062b38',
          900: '#03161c',
        },
        // Moagi Lime - Accent color from logo (#A6C85A)
        'moagi-lime': {
          50: '#f5f9ed',
          100: '#ebf3db',
          200: '#d7e7b7',
          300: '#c3db93',
          400: '#afcf6f',
          500: '#A6C85A', // Main logo color
          600: '#85a048',
          700: '#647836',
          800: '#425024',
          900: '#212812',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Professional font
      }
    },
  },
  plugins: [],
}
