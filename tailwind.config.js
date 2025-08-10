/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0f162a',
          secondary: '#1d283b', 
          tertiary: '#2d3447',
          accent: '#05b6d4',
          gray: '#8b8b8b',
        },
        primary: {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99effd',
          300: '#60e2fa',
          400: '#22ccf0',
          500: '#05b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        dark: {
          100: '#2d3447',
          200: '#1d283b',
          300: '#0f162a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
