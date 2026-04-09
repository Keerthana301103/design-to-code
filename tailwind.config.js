/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#075055',
          light: '#71d8c5',
          dark: '#013a5e',
        },
        accent: {
          DEFAULT: '#013a5e',
          light: '#5ba3d0',
        },
        badge: {
          bg: 'rgba(170, 202, 228, 0.2)',
          border: 'rgba(170, 202, 228, 1)',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Franklin Gothic Medium', 'Arial Narrow', 'Arial', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        badge: '4px',
        nav: '10px',
      },
      backdropBlur: {
        sidebar: '12px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        floating: '0 4px 6px rgba(0,0,0,0.1), 0 10px 15px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};