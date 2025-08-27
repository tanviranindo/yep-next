/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['var(--font-outfit)', 'sans-serif'],
        'sans': ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
