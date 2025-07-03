// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}', // Adjust according to your project structure
    ],
    theme: {
      extend: {},
    },
    plugins: [
    require('@tailwindcss/typography')
  ],
  }
  