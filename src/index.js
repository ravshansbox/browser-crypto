var buffer = require('safe-buffer');
var aes = require('browserify-aes/browser');
var createECDH = require('create-ecdh/browser');
var pbkdf2 = require('pbkdf2');

global.browserCrypto = {
  Buffer: buffer.Buffer,
  createCipher: aes.createCipher,
  createCipheriv: aes.createCipheriv,
  createDecipher: aes.createDecipher,
  createDecipheriv: aes.createDecipheriv,
  getCiphers: aes.getCiphers,
  createECDH: createECDH,
  pbkdf2: pbkdf2.pbkdf2,
  pbkdf2Sync: pbkdf2.pbkdf2Sync,
};
