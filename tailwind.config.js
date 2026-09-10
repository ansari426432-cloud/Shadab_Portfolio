/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#EAE7DC',
        panel: '#F5F3EC',
        panelDeep: '#DFDBCC',
        ink: '#1D2019',
        inkSoft: '#4B5044',
        line: '#CBC6B4',
        rail: '#20241D',
        railSoft: '#2C3124',
        railLine: '#3B4131',
        railText: '#E9E6D8',
        copper: '#B0651F',
        copperSoft: '#D98A3D',
        live: '#3F7A4E',
        idle: '#8C8672',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-lg': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.02', letterSpacing: '-0.015em' }],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.25 },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        rise: {
          '0%': { transform: 'translateY(12px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        blink: 'blink 2.4s ease-in-out infinite',
        sweep: 'sweep 2.6s ease-in-out infinite',
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
