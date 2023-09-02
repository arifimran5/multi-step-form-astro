/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        background_main: 'rgba(22, 22, 22, 1)',
        background_secondary: 'rgba(38, 38, 38, 1)',
        border_color: 'rgba(48, 48, 48, 1)',
        text_primary: 'rgba(218, 218, 218, 1)',
        text_secondary: 'rgba(96, 96, 96, 1)',
        accent: 'rgba(154,4,67,1)',
        border_accent: 'rgba(176, 0, 74, 1)',
      },
    },
  },
  plugins: [],
}
