const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json');
const polyfillNode = require('rollup-plugin-polyfill-node');
const terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'browserCrypto',
    },
    {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'browserCrypto',
      plugins: [terser()],
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve({ browser: true, preferBuiltins: false }),
    json(),
    polyfillNode(),
  ],
};
