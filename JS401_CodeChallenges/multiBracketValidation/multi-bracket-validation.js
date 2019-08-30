'use strict';

function checkCircleBrackets(string) {
  let opens = string.match(/\(/g);
  let closes = string.match(/\)/g);
    return opens.length === closes.length;
}

function checkSquareBrackets (string) {
  let square = string.match(/\[/g);
  let closeSquare = string.match(/\]/g);
  if (square.length !== closeSquare.length){
  return false}
  //this is coming back as 'null' instead of false -- why?? 
}

function checkCurlyBrackets (string) {
  let curly = string.match(/\{/g);
  let closeCurly = string.match(/\}/g);
    return curly.length === closeCurly.length;
}


console.log(checkCircleBrackets('( ( a + b ) )')); // true
console.log(checkCircleBrackets('( ( ) a + b )')); // true
console.log(checkCircleBrackets('( ) ) ( ( a + b ) / 5 – d )')); // false

console.log(checkSquareBrackets('[]abc[]')); //true
// console.log(checkSquareBrackets('[]')); //true 
// console.log(checkSquareBrackets('[[')) //false

console.log(checkCurlyBrackets('{}')) //true
console.log(checkCurlyBrackets('{([hello])}')) //true
console.log(checkCurlyBrackets('{[]{{}')) //false