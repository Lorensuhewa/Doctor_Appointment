/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5f6FFF',
        secondary: '#ffcc00',
        danger: '#e74c3c',
      },
    },
  },
  plugins: [],
}

