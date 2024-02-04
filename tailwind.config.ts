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
      sans: ['var(--font-opensans)'],
      serif: ['var(--font-montserrat)'],
    },
    extend: {
      colors: {
        primary: {
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
  plugins: [],
};
export default config;
