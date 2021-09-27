import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  n= n.split('').filter(e => e != '-');

 let arr =[];
  n.forEach(element => {
    if (element>-1||element<10){arr.push(element)}
    else{
     arr.push(element.codePointAt(element)) 
    }
    
  });

  for(let i=0;i<arr.length;i++){
    if(!(arr[i]>-1 && arr[i]<10 || arr[i]>64 && arr[i]<71)){
      return false;
    }
  }
 return true
}
