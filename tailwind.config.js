/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0079ff',
        'primary-hover': '#60abff',
        'error': '#f74646',
        'additional': '#222731',
        'txt-high-contrast-light': '#2b3442',
        'txt-mid-contrast-light': '#4b6a9b',
        'txt-high-contrast-dark': '#fff',
        'txt-mid-contrast-dark': '#c9ccd1',
        'txt-low-contrast': '#6b7280',
        'bg-light': '#f6f8ff',
        'bg-light-second' : '#fefefe',
        'bg-dark': '#141d2f',
        'bg-dark-second': '#1e2a47',
        'border-color-light': '#e5e7eb',
        'border-color-dark': '#2c2f42',
      },
      boxShadow: {
        // Это primary только в rgb
        main: "0 3px 15px 1px rgba(70, 96, 187, 0.2)"
      },
      fontFamily: {
        'main': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

