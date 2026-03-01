export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifyGradients: true,
          colormin: true,
          calc: true,
          mergeLonghand: true,
          mergeRules: true,
          uniqueSelectors: true,
        }]
      }
    } : {})
  },
};
