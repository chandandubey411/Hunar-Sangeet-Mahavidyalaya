/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        maroon: '#800000',
        golden: '#d4a017',
        beige: '#f5f1e9',
        charcoal: '#333333',
      }
    },
  },
  plugins: [],
}