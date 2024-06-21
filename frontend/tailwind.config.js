/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '93': '93%',
      },
      fontSize: {
        '14': '14px',
      },
      colors: {
        'black1': '#1C1B20',
        'banner': 'rgba(93, 87, 145, 0.5)',
        'grey1': '#C9C5D0',
        'pry': '#5D5791',
      }
    },
  },
  plugins: [],
}

