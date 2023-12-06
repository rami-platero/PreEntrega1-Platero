/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'products': 'repeat(auto-fill, minmax(23rem, 1fr))'
      }
    },
  },
  plugins: [],
}

