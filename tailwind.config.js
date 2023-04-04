/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#F0F1EA',
        primary: '#B63E96', // 240,86,199
        primaryDark: '#58E6D9', // 80,230,217
      },
    },
  },
  plugins: [require('tailwindcss-inner-border')],
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          textDecoration: 'underline',
          'text-decoration-color': '#c3af5e',
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
