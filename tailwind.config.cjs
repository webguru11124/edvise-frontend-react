/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Toggle dark-mode based on class or data-mode=”dark”
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        current: 'currentColor',

        neutral: {
          DEFAULT: 'var(--color-neutral-500)',
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)'
        },
        secondary: {
          DEFAULT: 'var(--color-secondary-500)',
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)'
        },
        skyblue: {
          DEFAULT: 'var(--color-skyblue-500)',
          50: 'var(--color-skyblue-50)',
          100: 'var(--color-skyblue-100)',
          200: 'var(--color-skyblue-200)',
          300: 'var(--color-skyblue-300)',
          400: 'var(--color-skyblue-400)',
          500: 'var(--color-skyblue-500)',
          600: 'var(--color-skyblue-600)',
          700: 'var(--color-skyblue-700)',
          800: 'var(--color-skyblue-800)',
          900: 'var(--color-skyblue-900)'
        },
        critical: {
          DEFAULT: 'var(--color-critical-500)',
          100: 'var(--color-critical-100)',
          200: 'var(--color-critical-200)',
          300: 'var(--color-critical-300)',
          400: 'var(--color-critical-400)',
          500: 'var(--color-critical-500)',
          600: 'var(--color-critical-600)',
          700: 'var(--color-critical-700)'
        },
        warning: {
          DEFAULT: 'var(--color-warning-500)',
          100: 'var(--color-warning-100)',
          200: 'var(--color-warning-200)',
          300: 'var(--color-warning-300)',
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)'
        },
        success: {
          DEFAULT: 'var(--color-success-500)',
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)',
          300: 'var(--color-success-300)',
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)'
        },
        info: {
          DEFAULT: 'var(--color-info-500)',
          100: 'var(--color-info-100)',
          200: 'var(--color-info-200)',
          300: 'var(--color-info-300)',
          400: 'var(--color-info-400)',
          500: 'var(--color-info-500)'
        }
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%'
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar-hide')],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(neutral|secondary|skyblue|critical|warning|success|info)/
    }
  ]
};
