/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        'discussBanner': "url('/assets/bg.jpg')",
      },
    },
    plugins: [],
  }