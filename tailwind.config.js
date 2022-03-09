const plugin = require("tailwindcss/plugin");

const labelChecked = plugin(function ({ addVariant, e }) {
  addVariant('labelChecked', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.${e(`labelChecked${separator}${className}`)}:checked + *`;
    })
  });
})

module.exports = {
  content: ['./src/**/*.njk'],
  theme: {
    extend: {},
  },
  plugins: [
    labelChecked
  ],
}