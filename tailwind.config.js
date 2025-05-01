/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Black Ops One"', 'cursive'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        'neon-pink': '#ff00ff',
        'neon-purple': '#9900ff',
        'neon-yellow': '#ffff00',
        'neon-blue': '#00ffff',
        'dull-gray': '#444444',
        'dark-gray': '#222222',
        'black': '#111111',
        'success': '#00ff00',
        'warning': '#ffcc00',
        'error': '#ff0000',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: 1,
            filter: 'brightness(1)'
          },
          '50%': { 
            opacity: 0.7,
            filter: 'brightness(1.5)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '56': '56px',
        '64': '64px',
      },
    },
  },
  plugins: [],
};