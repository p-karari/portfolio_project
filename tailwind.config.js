/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#FFD700', // classic gold
          light: '#FFEF9F',    // lighter variation
          dark: '#B8860B',     // deeper variation
        },
      },
      fontFamily: {
        general: ['"Author"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cmyk", "black"],
  },
}


