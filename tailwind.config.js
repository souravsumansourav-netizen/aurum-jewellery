/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
      colors: {
        ivory: '#FAF7F2',
        gold: '#B8960C',
        'gold-light': '#FDF6E3',
        charcoal: '#1A1A1A',
        muted: '#6B6B6B',
        emerald: '#2D6A4F',
        sienna: '#A0522D',
      },
    },
  },
  plugins: [],
}
