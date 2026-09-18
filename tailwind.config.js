/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E6E6E6",
        "background-light": "#E6E6E6",
        "background-dark": "#0D0D0D",
        mono: {
          black: "#0D0D0D",
          graphite: "#2B2B2B",
          muted: "#8E8E8E",
          light: "#E6E6E6",
        },
        "surface-container-lowest": "#0E0E0E",
        "surface-container-low": "#1C1B1B",
        "surface-container": "#201F1F",
        "surface-container-high": "#2A2A2A",
        "surface-container-highest": "#353534",
        "outline-variant": "#444748",
        outline: "#8E9192",
        secondary: "#C8C6C5",
        "on-surface-variant": "#C4C7C8",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        bodoni: ['"Bodoni Moda"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        "display-hero": ['"Bodoni Moda"', '"Cormorant Garamond"', 'serif'],
        "label-caps": ['Inter', 'sans-serif'],
        "label-code": ['Inter', 'monospace'],
      },
      letterSpacing: {
        widest_editorial: '0.3em',
        spaced_cta: '0.2em',
      },
      keyframes: {
        heroReveal: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineDraw: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '50.1%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        strokeTravel: {
          '0%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-1000' },
        }
      },
      animation: {
        'hero-reveal-1': 'heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s backwards',
        'hero-reveal-2': 'heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.35s backwards',
        'hero-reveal-3': 'heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.55s backwards',
        'hero-reveal-4': 'heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.75s backwards',
        'hero-reveal-5': 'heroReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.95s backwards',
        'scroll-line': 'lineDraw 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        'perimeter': 'strokeTravel 4s linear infinite',
      }
    },
  },
  plugins: [],
};
