'use strict';

const node = require('./node');


class Queue {
  constructor() {
      this.items = [];
  }
}

Queue.prototype.enqueue = function (value) {
    this.items.push(value);
};

Queue.prototype.dequeue = function (value) {
return this.items.shift();
};

const queue = new Queue(); //TODO: unreachable code, fix

queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.dequeue(1);
queue.dequeue(2);
queue.dequeue(3);

// push pop push multiple empty peek instantiate empty

// Stack class 
class Stack { 
  constructor(value) 
  { 
    this.items = []; 
    this.top = value; 
  } 

  peek() {  
    return this.items[this.items.length - 1]; 
  };

  push(value) 
  { 
    this.items.push(value); 
  };

  pop() 
  {
    if (this.items.length == 0)
      throw new Error('Empty!')
    else {
      return this.items.pop();
    }
  };

};
  
  let stack = new Stack(); 
  
  // Adding element to the stack 
  stack.push(10); 
  stack.push(20); 
  stack.push(30); 
  
    
  // Printing the stack element 
  // prints [10, 20, 30] 
    
  // returns 30 
  console.log(stack.peek()); 
    
  // returns 30 and remove it from stack 
  console.log(stack.pop()); 
    
  // returns [10, 20] 
 
  
  module.exports = {
    Queue,
    Stack
  };
