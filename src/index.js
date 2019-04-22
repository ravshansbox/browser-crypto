import { Buffer as _Buffer } from 'safe-buffer';
import _createECDH from 'create-ecdh/browser';
import {
  getCiphers as _getCiphers,
  createCipher as _createCipher,
  createCipheriv as _createCipheriv,
  createDecipher as _createDecipher,
  createDecipheriv as _createDecipheriv
} from 'browserify-aes/browser';

export const Buffer = _Buffer;
export const createECDH = _createECDH;
export const getCiphers = _getCiphers;
export const createCipher = _createCipher;
export const createCipheriv = _createCipheriv;
export const createDecipher = _createDecipher;
export const createDecipheriv = _createDecipheriv;
export default {
  Buffer,
  getCiphers,
  createECDH,
  createCipher,
  createCipheriv,
  createDecipher,
  createDecipheriv
};
