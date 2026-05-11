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
          DEFAULT: '#E9A84C',
          50: '#FEF8EC',
          100: '#FCEECE',
          200: '#F8DC9D',
          300: '#F4CA6C',
          400: '#F0B83B',
          500: '#E9A84C',
          600: '#D4891A',
          700: '#A96E14',
          800: '#7E520F',
          900: '#533709',
        },
        forest: {
          DEFAULT: '#0D6E4F',
          50: '#E8F5F1',
          100: '#C5E6DA',
          200: '#8BCCB5',
          300: '#52B390',
          400: '#1E9A6B',
          500: '#0D8058',
          600: '#0D6E4F',
          700: '#0B5C41',
          800: '#084A34',
          900: '#063827',
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
