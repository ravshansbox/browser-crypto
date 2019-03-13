const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'browser-crypto.js',
    library: 'browserCrypto',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
};
