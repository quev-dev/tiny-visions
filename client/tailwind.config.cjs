/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        palette: {
          'c-darker': '#1c1b22',
          'c-dark': '#282732',
          'c-mid': '#474658',
          'c-light': '#EEEEEE',
          'c-accent': '#F4387C',
        },
      },
    },
  },
  plugins: [],
};
