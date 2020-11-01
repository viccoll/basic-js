const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(flag = true){
    if (flag === undefined) throw new Error();
    this.flag = flag;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }
  encrypt( str, key)
  {
    if (str === undefined || key === undefined) throw new Error();
    let keyArray = key.toUpperCase().split('');
    let keyPosition = 0;
    let retValue = str.toUpperCase().split('').map( x => {
      if (this.alphabet.indexOf(x) >= 0){
        let shift = this.alphabet.indexOf(keyArray[keyPosition]);
        let newIdx = (shift + this.alphabet.indexOf(x)) % this.alphabet.length;
        keyPosition = ++keyPosition % keyArray.length;
        return this.alphabet[newIdx];
      }
      return x;
    } );
    return this.flag ? retValue.join('') : retValue.reverse().join('');
  }    
  decrypt(str,key) {
      if (str === undefined || key === undefined) throw new Error();
    let keyArray = key.toUpperCase().split('');
    let keyPosition = 0;
    let retValue = str.toUpperCase().split('').map( x => {
      if (this.alphabet.indexOf(x) >= 0){
        let shift = this.alphabet.indexOf(keyArray[keyPosition]);
        let newIdx = (this.alphabet.indexOf(x) - shift);
        if (newIdx < 0) newIdx += this.alphabet.length
        keyPosition = ++keyPosition % keyArray.length;
        return this.alphabet[newIdx];
      }
      return x;
    } )
    return this.flag ? retValue.join('') : retValue.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
