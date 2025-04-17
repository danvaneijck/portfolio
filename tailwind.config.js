/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: '#092327',
        darkSlate: '#0B5351',
        seaGreen: '#00A9A5',
        airForce: '#4E8098',
        skyLight: '#90C2E7',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out forwards',
        float: "float 5s ease-in-out infinite",
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        marquee: 'marquee 20s linear infinite',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      // Utility to pause CSS animations
      addUtilities({
        '.animate-paused': { 'animation-play-state': 'paused' },
      }, ['responsive', 'hover']);
    }
  ],
}

