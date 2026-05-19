/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
      boxShadow: {
        'soft-glow': '0 0 60px rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}