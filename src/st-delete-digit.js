import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let index =0;
  n = n.toString().split('');
  for (let i=1;i<n.length;i++){
  let num = n[0];
  if (n[i]<num){
    num = n[i];
    index = i
  }
  }
  n.splice(index,1);
  return Number(n.join(''));
}
