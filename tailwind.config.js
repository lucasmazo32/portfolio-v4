/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        pykex: {
          primary: '#F5F1ED',
          'primary-content': '#2B2D42',
          'base-100': '#2B2D42',
          'base-content': '#F5F1ED',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
