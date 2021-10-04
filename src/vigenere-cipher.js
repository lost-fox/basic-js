import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
 
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error("Incorrect arguments!");
    }

  let codeMes=[];

  message = message.toUpperCase().split('').map(ascii);
  key = key.toUpperCase().split('').map(ascii);

  function ascii(el){
    let char = el.charCodeAt();
    return char;
  }

  function char(el){
    return String.fromCharCode(el);
  }  
    let i=0; let j=0;
    while (i<message.length){
      
      if(message[i]>64&&message[i]<91){
      let number = Math.abs(key[j] - 65);
      let letter = message[i]+number;
      if (letter>90){
        letter = letter - 90 + 64
        codeMes.push(letter);
      }else{
        codeMes.push(letter);
      }
      j++;
      }else{
        codeMes.push(message[i]);
      }      
      i++;      
      if(j>=key.length){
        j=0;
      }
    }
  
    if(!this.mode){
      return codeMes.map(char).reverse().join('');
    }

    return codeMes.map(char).join('');
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined){
      throw new Error("Incorrect arguments!");
    }

    let codeMes=[];

    message = message.toUpperCase().split('').map(ascii);
    key = key.toUpperCase().split('').map(ascii);
  
    function ascii(el){
      let char = el.charCodeAt();
      return char;
    }
  
    function char(el){
      return String.fromCharCode(el);
    }
  
    
      let i=0; let j=0;
      while (i<message.length){
        
        if(message[i]>64&&message[i]<91){
          let letter;
        let number = Math.abs((message[i] - key[j]) + 65);
        if (number<65){
          letter = 91 - (65 - number);
          codeMes.push(letter);
        } else{
          letter = number;
          codeMes.push(letter);
        }   
        j++;
        }else{
          codeMes.push(message[i]);
        }      
        i++;      
        if(j>=key.length){
          j=0;
        }
      }
      if(!this.mode){
        return codeMes.map(char).reverse().join('');
      }
        return codeMes.map(char).join('');
      
  }
}
