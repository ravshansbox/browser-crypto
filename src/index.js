import {
  createCipher as _createCipher,
  createCipheriv as _createCipheriv,
  createDecipher as _createDecipher,
  createDecipheriv as _createDecipheriv,
  getCiphers as _getCiphers,
} from 'browserify-aes/browser';
import _createECDH from 'create-ecdh/browser';
import { Buffer as _Buffer } from 'safe-buffer';

export var Buffer = _Buffer;
export var createECDH = _createECDH;
export var getCiphers = _getCiphers;
export var createCipher = _createCipher;
export var createCipheriv = _createCipheriv;
export var createDecipher = _createDecipher;
export var createDecipheriv = _createDecipheriv;
export default {
  Buffer: Buffer,
  getCiphers: getCiphers,
  createECDH: createECDH,
  createCipher: createCipher,
  createCipheriv: createCipheriv,
  createDecipher: createDecipher,
  createDecipheriv: createDecipheriv,
};
