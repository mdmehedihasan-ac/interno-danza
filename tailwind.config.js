/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        blush: {
          100: '#f9ede7',
          200: '#f0d4c8',
          300: '#e4b9a8',
          400: '#d49b87',
        },
      },
      letterSpacing: {
        luxury: '0.35em',
        wide2: '0.2em',
      },
      transitionDuration: {
        600: '600ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
}
