/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({

        /* For Firefox Browser */
          '.scrollbar': {
              overflowY: 'auto',
              scrollbarColor: `${theme('colors.white.600')} ${theme('colors.white.200')}`,
              scrollbarWidth: 'thin',
          },

          /* For Chrome, EDGE, Opera, Others */
          '.scrollbar::-webkit-scrollbar': {
              height: '2px',
              width: '1px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.white.600'),
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: theme('colors.white.200'),
          },
      });
  }),
  ],
}