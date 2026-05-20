/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#052049',
          50:  '#EEF2FA',
          100: '#D4DFEF',
          200: '#A9BFE0',
          300: '#7D9ED0',
          400: '#527EBF',
          500: '#2C5FA6',
          600: '#1A4180',
          700: '#0F2D5E',
          800: '#052049',
          900: '#021230',
          950: '#010919',
        },
        gold: {
          DEFAULT: '#D4A017',
          50:  '#FDF8E7',
          100: '#FAF0C4',
          200: '#F4DF88',
          300: '#ECC94A',
          400: '#E0B22A',
          500: '#D4A017',
          600: '#B08213',
          700: '#88640F',
          800: '#5E450A',
          900: '#362806',
        },
        forest: {
          DEFAULT: '#9C318F',
          50:  '#FBF0FA',
          100: '#F5D8F3',
          200: '#EAB1E7',
          300: '#DC87D8',
          400: '#C95EC4',
          500: '#B33FAD',
          600: '#9C318F',
          700: '#7A2470',
          800: '#581A52',
          900: '#380F34',
          950: '#1C0819',
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
