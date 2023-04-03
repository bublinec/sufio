const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    // couses error when accessing the config in js
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003E9C',
        },
        'error': {
          DEFAULT: colors.red[700],
        },
        'text-primary': '#011C27',
        'text-secondary': '#9CA3AF',
      },
    },
  },
  plugins: [],
};
