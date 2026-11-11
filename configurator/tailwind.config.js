module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          900: '#1e1b4b',
        },
        dark: {
          bg: '#0f1117',
          surface: '#181b24',
          card: '#1f2430',
          border: '#2a324b',
          muted: '#8b9bb4'
        }
      }
    },
  },
  plugins: [],
}
