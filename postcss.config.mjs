export default {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
    },
    autoprefixer: {},
    cssnano: {
      preset: 'default',
    },
    stylelint: {},
  },
};
