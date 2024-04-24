/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'little-bounce': 'little-bounce 4s linear infinite',
        'little-ping': 'little-ping 4s linear infinite;',
        'little-spin': 'little-spin 4s linear infinite'
      }
    },
  },
  plugins: [],
}

