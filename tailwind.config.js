/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'vue-color': '#52BC8A',
        'css-color': '#1D81C0',
        'html-color': '#E5532D',
        'mongo-color': '#419432',
        'sails-color': '#0DABBD',
        'python-color': '#0A7BBF',
        'rabbitmq-color': '#FF6B08',
        'cpp-color': '#084A87'
      },
      animation: {
        'scanline': 'scanline 6s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}