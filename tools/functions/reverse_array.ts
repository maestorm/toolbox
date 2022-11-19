/**
 * You need to sort an array of integers by repeatedly reversing
     * the order of the first several elements of it.
     *
     * For example, to sort [11,14,12,13], you need to  reverse the order of the first two (2)
     * elements and get [14,11,12,13], then reverse the order of the first four (4) elements
     * and get [13,12,11,14] and then reverse the order of the first three (3) elements.
     *
         
     * The method should return array of integers corresponding to the required reversals.
     * For the previous example, given an array [11,14,12,13]
     * the method should return a array with integers [2,4,3].
 */

// Tomas point: everytime it is about to reverse but nth FIRST of numbers in array

const array = [11,14,12,13];

function getLength(arr, i) {
  let modifiedArr = arr;
  let buffer = 0;
  let values = [];
  
  //for(let i = 0; i < modifiedArr.length; i++) {
    if (modifiedArr[i-1] > modifiedArr[i]) {
      //modifiedArr.splice(i);
      buffer = !!modifiedArr[i-1] && modifiedArr[i-1];
      if(modifiedArr[i]) {
        modifiedArr[i-1] = modifiedArr[i];
        modifiedArr[i] = buffer;
      }
      modifiedArr = getLength(modifiedArr, i);
    }
  //}
  console.log('values[i]: ', i);
  return modifiedArr;
}


const reverse = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    console.log(getLength(arr, i));
  }
  return result;
}
