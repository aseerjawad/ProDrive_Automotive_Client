/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'siara': ['Saira Semi Condensed', 'sans-serif'],
      'Roboto_slab': ['Roboto Slab', 'serif']
    }
  },
  plugins: [require("daisyui")],
}

