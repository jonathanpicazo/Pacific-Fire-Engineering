import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/tw/**/*.{js,ts}',
  ],
  theme: {
    fontFamily: {
      'sans-serif': ['var(--font-opensans)', 'var(--font-montserrat)'],
    },
    extend: {
      colors: {
        primary: {
          lightest: '#FAD4D8',
          light: '#6b0119',
          DEFAULT: '#830324',
          dark: '#990033',
        },
        accent: {
          dark: '#333333',
          light: '#cccccc',
        },
        highlight: '#FF5733',
      },
      fontFamily: {
        // 👇 Add CSS variables
        body: ['var(--font-opensans)'],
        header: ['var(--font-montserrat)'],
      },
      opacity: {
        hover: '0.7',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('@tailwindcss/typography')],
};
export default config;
