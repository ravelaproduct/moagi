/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moagi-blue': '#AEC6CF', // Pastel Blue (example, fine-tune as needed)
        'moagi-white': '#FFFFFF',
        'moagi-yellow': '#FDFD96', // Soft Yellow (example)
        // Alternative pastel palette references directly from common pastel palettes if not specified exactly
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc', // Brand-ish
          400: '#38bdf8',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Professional font
      }
    },
  },
  plugins: [],
}
