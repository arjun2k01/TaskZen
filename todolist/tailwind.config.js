module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          '700': '#4a5568',
          '800': '#2d3748',
        },
      },
    },
  },
  plugins: [],
}
