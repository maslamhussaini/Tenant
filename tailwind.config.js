/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#06d6a0',
          dark: '#04b584',
        },
        navy: {
          900: '#0c1a2e',
          800: '#101e35',
          700: '#162337',
          600: '#1e2f45',
          500: '#2e4a66',
          400: '#4a7090',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
