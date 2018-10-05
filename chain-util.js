const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class ChainUtl {
  static genKeyPair() {
    return ec.genKeyPair();
  }
}

module.exports = ChainUtl;