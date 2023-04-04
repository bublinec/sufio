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
          DEFAULT: '#6266F0',
        },
        'error': {
          DEFAULT: colors.red[600],
        },
        "background": "#FFFEFE",
        'text-primary': '#111626',
        'text-secondary': '#4B5563',
        'light-gray': "#F2F4F7",
        'dark-gray': '#CDCCCD',
      },
    },
  },
  plugins: [],
};
