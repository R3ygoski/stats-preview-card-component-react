/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkDesaturatedBlue: '#1b1938',
        softViolet: '#aa5cdb',
        whiteSlightlyTransparent: '#ffffffbf',
        whiteTransparent: '#fff9',
      },
      fontFamily: {
        interFont: ['Inter', 'sans-serif'],
        lexendDecaFont: ['Lexend Deca', 'sans-serif'],
      },
      backgroundImage: {
        'image-header-desktop': "url('/images/image-header-desktop.jpg')",
        'image-header-mobile': "url('/images/image-header-mobile.jpg')",
      },
      screens: {
        'mbl': '375px',
        'dt': '1024px',
      }
    },
  },
  plugins: [],
}

