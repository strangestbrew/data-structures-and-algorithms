// push pop push multiple empty peek instantiate empty

// Stack class 
class Stack { 
  constructor() 
  { 
    this.items = []; 
    this.top = value; 
  } 
};

// push function 
Stack.prototype.push(value) 
{ 
  this.items.push(value); 
};

// pop function 
Stack.prototype.pop(value) 
{
  if (this.items.length == 0)
    throw new Error('Empty!')

  return this.items.pop(); 
};

// peek function 
Stack.prototype.peek() //TODO: fix this unreachable code!
{  
  return this.items[this.items.length - 1]; 
};


let stack = new Stack(); 

// Adding element to the stack 
stack.push(10); 
stack.push(20); 
stack.push(30); 

  
// Printing the stack element 
// prints [10, 20, 30] 
console.log(stack.printStack()); 
  
// returns 30 
console.log(stack.peek()); 
  
// returns 30 and remove it from stack 
console.log(stack.pop()); 
  
// returns [10, 20] 
console.log(stack.printStack()); 
