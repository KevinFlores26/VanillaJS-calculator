import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  esmodule: true,
  server: {
    port: 3000,
  },
  plugins: [
    babel({
      babelConfig: {
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'usage',
              corejs: 3,
            },
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: 3,
              helpers: true,
              regenerator: true,
              useESModules: true,
            },
          ],
        ],
      },
    }),
  ],
  css: {
    postcss: '../config/postcss.config.mjs',
  },
  build: {
    outDir: '../dist',
  },
});
