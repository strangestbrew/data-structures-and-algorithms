'use strict';

/** gameBoard = 
 *   0   1  2
 * [[00, 01, 02], //row 0
 * [ 10, 11 , 12 ], //row 1
 * [ 20, 21 , 22 ]] //row 2
 * 
 * [x, x, x] = true (x wins)
 * 
 * [o, o, o] = true (o wins)
 * 
 * [[o, x, x]
 *  [x, o, x]
 *  [x, x, o] = true (o wins)
 * 
 * [[x, o, o]
 *  [x, o, x]
 *  [x, x, o]] = true (x wins)
 * 
 * so if [00 01 02] === 
 * if [10 11 12] === 
 * if [20 21 22] ===
 * 
 * if [00 11 22] ===
 * || [02 11 20] ===
 * 
 * if 00 10 20 || 01 11 21 || 02 12 22 ===
 */


let gameBoard = [
[ , , ], 
[ , , ], 
[ , , ]];

let x = 'x';
let o = 'o';

function tallyWins() {
for(let i = 0; i < gameBoard.length; i++){
  for(let j = 0; j < gameBoard[i].length; j++); {
    console.log('43')
    if (gameBoard[0][0] && gameBoard[0][1] && gameBoard[0][2] || gameBoard[1][0] && gameBoard[1][1] && gameBoard[1][2] || gameBoard[2][0] && gameBoard[2][1] && gameBoard[2][2] || gameBoard[0][0] && gameBoard[1][0] && gameBoard[2][0] || gameBoard[0][1] && gameBoard[1][1] && gameBoard[2][1] || gameBoard[0][2] && gameBoard[1][2] && gameBoard[2][2] || gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2] || gameBoard[0][2] && gameBoard[1][1] && gameBoard[2][0] === 'x'){
      return x = true;
    }
    
    if (gameBoard[0][0] && gameBoard[0][1] && gameBoard[0][2] || gameBoard[1][0] && gameBoard[1][1] && gameBoard[1][2] || gameBoard[2][0] && gameBoard[2][1] && gameBoard[2][2] || gameBoard[0][0] && gameBoard[1][0] && gameBoard[2][0] || gameBoard[0][1] && gameBoard[1][1] && gameBoard[2][1] || gameBoard[0][2] && gameBoard[1][2] && gameBoard[2][2] || gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2] || gameBoard[0][2] && gameBoard[1][1] && gameBoard[2][0] === 'o'){
      return o = true;
    }
    }; 
     return null;
  }
};

tallyWins();