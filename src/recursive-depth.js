import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
  //  if (arr.every(e => !(e instanceof Array))){
  //    return 1
  //  }else{
  //    return 1+this.calculateDepth([].concat(...arr))
  //  }

  if(arr.filter(e => e.constructor.name === 'Array').length !=0){
    return 1+this.calculateDepth([].concat(...arr.filter(e => e.constructor.name === "Array")))
  }else{
    return 1
  }
}
}
