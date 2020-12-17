module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      colors: {
        'fz-dark-gray': '#1b1b1b',
        'fz-light-gray': '#313236',
        'fz-green': '#77ff85',
      },
      spacing: {
        72: '18rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
