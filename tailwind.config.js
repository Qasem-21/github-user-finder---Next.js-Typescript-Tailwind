/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // GitHub Dark Theme Colors
        'github-dark': '#0D1117',
        'github-surface': '#161B22',
        'github-elevated': '#21262D',
        'github-border': '#30363D',
        'github-text-primary': '#E6EDF3',
        'github-text-secondary': '#8B949E',
        'github-blue': '#3B82F6',
        'github-blue-hover': '#2563EB',
        'github-green': '#2BA14B',
        'github-red': '#F85149',
        'github-yellow': '#D29922',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin 1s linear infinite',
        'pulse-ring': 'pulseRing 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'shake': 'shake 0.3s ease-in-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 0 4px rgba(59, 130, 246, 0.1)',
        'glow-blue-lg': '0 0 0 6px rgba(59, 130, 246, 0.15)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.3)',
      },
      borderRadius: {
        'card': '16px',
        'pill': '48px',
      },
    },
  },
  plugins: [],
};