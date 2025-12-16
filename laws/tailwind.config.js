export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',  // Dark base
        section: '#2a2a2a',     // Card/section background
        gold: '#d4af37  ',        // Main accent
        muted: '#b0b0b0',       // Secondary text
        warning: '#ff4d4f',     // Warning/red
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

