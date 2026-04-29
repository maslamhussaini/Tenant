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
        background: '#f4f6fa',
        surface: '#ffffff',
        brand: {
          DEFAULT: '#06d6a0',
          dark: '#04b584',
          light: '#e6fff8',
        },
        navy: {
          900: '#0a1120',
          800: '#111827',
          700: '#1f2937',
          600: '#374151',
          500: '#4b5563',
          400: '#6b7280',
          300: '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.03)',
        'glass-hover': '0 12px 48px 0 rgba(0, 0, 0, 0.06)',
        'soft': '0 2px 10px rgba(0, 0, 0, 0.02)',
      },
      backgroundImage: {
        'grid-pattern': 'radial-gradient(#d1d5db 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))',
      },
      backgroundSize: {
        'grid-pattern': '20px 20px',
      }
    },
  },
  plugins: [],
}
