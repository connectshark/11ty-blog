module.exports = {
  content: ['./src/**/*.{njk,md}'],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}