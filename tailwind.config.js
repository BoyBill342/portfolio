/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F172A',
        card: '#111827',
        accent: '#3B82F6',
        cyan: '#06B6D4',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(59,130,246,0.22), transparent 42%)',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', '.light &');
    }),
  ],
};