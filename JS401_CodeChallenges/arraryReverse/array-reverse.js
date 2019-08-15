'use strict';

//Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

const reverseArrayInPlace = module.exports = {};


// let arr = [1, 3, 5, 7, 2000, -16];
// let arr2 = ['never', 'gonna', 'give', 'you', 'up'];
// console.log(arr, 'hello moto');

function reverseArrayInPlace(arr) {
  for (var i = 0; i <= (arr.length - 1) / 2; i++) {
      let indexValue = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = indexValue;
  }
  console.log('line 12');
  return arr;
}
reverseArrayInPlace();

