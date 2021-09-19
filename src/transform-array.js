import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {

  if (!Array.isArray(arr)){
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }

  let newArr =[];

  for (let i=0;i<arr.length;i++){
    switch (arr[i]){
      case '--discard-next': delete arr[i+1]; break;
      case '--discard-prev': delete newArr[i-1]; break;
      case '--double-next': newArr.push(arr[i+1]); break;
      case '--double-prev': newArr.push(arr[i-1]); break;
      default:newArr.push(arr[i]);
    }
  }
  
  for(let i=0;i<newArr.length;i++){
     if(newArr[i]==undefined){
        newArr.splice(i,1);
        i--;
     }
  }

 return newArr;
}
