/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '38%': '38%',
        '93': '93%',
        '264': '264px',
        '94': '94%',
        '96%': '96%',
        'foot': 'calc(100% - 840px)',
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '22': '22px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '36': '36px',
      },
      colors: {
        'black1': '#1C1B20',
        'black2': '#171D1E',
        'black3': '#47464F',
        'banner': 'rgba(93, 87, 145, 0.5)',
        'modal': 'rgba(93, 87, 145, 0.2)',
        'modal-border': 'rgba(143, 73, 81, 0.14)',
        'card-sm': 'rgba(143, 73, 81, 0.1)',
        'grey1': '#C9C5D0',
        'grey2': '#787680',
        'grey3': '#D5DBDC',
        'pry': '#5D5791',
        'surface': '#F5FAFB',
        'mobile': 'rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

