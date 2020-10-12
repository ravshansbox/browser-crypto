const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'browserCrypto',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  performance: {
    hints: false,
  },
  resolve: {
    fallback: {
      buffer: false,
      stream: false,
    },
  },
  stats: {
    children: false,
    modules: false,
  },
  devServer: {
    stats: {
      children: false,
      modules: false,
    },
  },
};
