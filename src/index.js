var buffer = require('safer-buffer');
var aes = require('browserify-aes/browser');
var createECDH = require('create-ecdh/browser');

global.browserCrypto = {
  Buffer: buffer.Buffer,
  createCipher: aes.createCipher,
  createCipheriv: aes.createCipheriv,
  createDecipher: aes.createDecipher,
  createDecipheriv: aes.createDecipheriv,
  getCiphers: aes.getCiphers,
  createECDH: createECDH,
};
