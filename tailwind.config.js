/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shreeyash: {
          green: '#0F766E', // Deep Professional Teal/Green
          emerald: '#042F2E', // Very dark luxury secondary
          accent: '#D4AF37', // 5-Star Medical Gold
          light: '#F8FAFC', // Slate 50
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}