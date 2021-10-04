import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options;
  let result =[];

  str = String(str);
  addition = String(addition);
  for(let i=0;i<repeatTimes;i++){
    result.push(str);
    for(let j=0;j<additionRepeatTimes;j++){
      result.push(addition);
      if(additionRepeatTimes>1){
        result.push(additionSeparator);
      }
      if(j==additionRepeatTimes-1 && additionRepeatTimes>1){
        result.splice(result.length-1,1);
      }
    }
    if(i<repeatTimes-1){
      result.push(separator);
    }
  }

  return result.join('');
}
