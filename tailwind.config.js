/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'nike-black': '#000000',
        'nike-white': '#FFFFFF',
        'nike-orange': '#FF6900',
        'nike-red': '#E60026',
        'nike-gray': '#7E7E7E',
        'nike-light-gray': '#F7F7F7'
      },
      fontFamily: {
        'nike': ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'nike-bold': ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontSize: {
        'nike-hero': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'nike-xl': ['3rem', { lineHeight: '1.2', fontWeight: '600' }],
        'nike-lg': ['2rem', { lineHeight: '1.3', fontWeight: '500' }],
        'nike-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '400' }]
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}