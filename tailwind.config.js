/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep-space base
        void: '#05060f',       // page background — near-black space
        hull: '#0b0e24',       // card / panel surface
        hull2: '#12163a',      // lighter panel surface
        hairline: '#232a56',   // borders on dark surface
        mist: '#aab0d6',       // secondary text on dark
        starlight: '#f4f6ff',  // primary text on dark
        // Nebula accent family (from the XENO poster)
        nebula: {
          pink: '#ff3f9e',
          rose: '#ff6fb0',
          orange: '#ffa53d',
          gold: '#ffcb57',
          purple: '#8b5cf6',
          violet: '#a78bfa',
          cyan: '#22d3ee',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glowPink: '0 0 40px -8px rgba(255, 63, 158, 0.45)',
        glowCyan: '0 0 40px -8px rgba(34, 211, 238, 0.4)',
        glowPurple: '0 0 40px -8px rgba(139, 92, 246, 0.45)',
        card: '0 8px 30px -10px rgba(0, 0, 0, 0.55)',
      },
      backgroundImage: {
        'nebula-gradient': 'linear-gradient(135deg, #ff3f9e 0%, #ffa53d 45%, #8b5cf6 75%, #3b82f6 100%)',
        'nebula-gradient-soft': 'linear-gradient(135deg, rgba(255,63,158,0.18), rgba(139,92,246,0.18))',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) translateX(8px) rotate(2deg)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(-14px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.25 },
          '50%': { opacity: 1 },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        drift: 'drift 9s ease-in-out infinite',
        driftSlow: 'driftSlow 16s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
        spinSlower: 'spinSlow 90s linear infinite',
        twinkle: 'twinkle 3.2s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
