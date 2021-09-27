import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let array = str.split("");
  let newStr = [];
  let first = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (first == array[i]) {
      sum++;
    } else{
      if (sum > 1) {
        newStr.push(sum);
        newStr.push(first);
        sum = 0;
        first = array[i];
        i--;
      } else if (sum = 1) {
        newStr.push(first);
        sum = 0;
        first = array[i];
        i--;
      }
    }
    
  }
  if (sum==1 || first == array[array.length]){
    newStr.push(first)
  }else if (sum>1 || first == array[array.length]){
    newStr.push(sum);
    newStr.push(first)
  }
  return newStr.join('');

}
