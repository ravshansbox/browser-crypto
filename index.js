const {
  Buffer,
  createECDH,
  createCipheriv,
  createDecipheriv,
  pbkdf2,
  pbkdf2Sync,
} = window.browserCrypto;

const ecdh1 = createECDH('secp256k1');
const ecdh2 = createECDH('secp256k1');

const publicKey1 = ecdh1.generateKeys();
const publicKey2 = ecdh2.generateKeys();

const secret1 = ecdh1.computeSecret(publicKey2);
const secret2 = ecdh2.computeSecret(publicKey1);

const iv = Buffer.alloc(16);
const data = Buffer.from('abcdef');

const cipher = createCipheriv('aes256', secret1, iv);
const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

const decipher = createDecipheriv('aes256', secret2, iv);
const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
console.log(decrypted.toString());

pbkdf2('password', 'salt', 1, 32, 'sha512', (error, derivedKey) => {
  if (error) throw error;
  console.log(derivedKey);
});

const derivedKey = pbkdf2Sync('password', 'salt', 1, 32, 'sha512');
console.log(derivedKey);
