/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#3D1035',
          50:  '#FBF0FC',
          100: '#F4D9F5',
          200: '#E9B3EC',
          300: '#DA8AE2',
          400: '#C960D7',
          500: '#B43DC7',
          600: '#9C318F',
          700: '#7B2470',
          800: '#5C1A52',
          900: '#3D1035',
          950: '#1E0820',
        },
        gold: {
          DEFAULT: '#D4654A',
          50:  '#FDF3F1',
          100: '#FAEAE5',
          200: '#F5D0C8',
          300: '#EDB09F',
          400: '#E08B73',
          500: '#D4654A',
          600: '#BB4D33',
          700: '#953C27',
          800: '#6B2C1A',
          900: '#421B10',
        },
        forest: {
          DEFAULT: '#7A3D79',
          50:  '#F5EAF5',
          100: '#EAD4EA',
          200: '#D4A9D4',
          300: '#BF7FBF',
          400: '#A455A4',
          500: '#7A3D79',
          600: '#672F66',
          700: '#4F2450',
          800: '#371A38',
          900: '#1F0F20',
        },
        warm: {
          50: '#FAF9F7',
          100: '#F4F2EE',
          200: '#E8E4DC',
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', ...fontFamily.serif],
        sans: ['Inter', ...fontFamily.sans],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
