import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/tw/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#830324',
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
    },
  },
  plugins: [],
};
export default config;
