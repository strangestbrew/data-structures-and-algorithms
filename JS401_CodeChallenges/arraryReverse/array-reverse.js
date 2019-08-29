'use strict';

//Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.



function reverseArrayInPlace(arr) {
  for (var i = 0; i <= (arr.length - 1) / 2; i++) {
      let indexValue = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = indexValue;
  }
  console.log('line 12');
  return arr;


// reverseArrayInPlace();



module.exports = reverseArrayInPlace;