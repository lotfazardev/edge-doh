import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
export default config;
