'use strict';

//enqueue enqueue many dequeue peek empty instantiate

class Queue {
  constructor() {
    this.items = [];

  }
}

//enqueue 
Queue.prototype.enqueue = function (value) {
   this.items.push(value);
};
  
//dequeue
Queue.prototype.dequeue = function (value) {
  return this.items.shift();
};
  
//peek function
Queue.prototype.peek = function(value) {
  return items[0];
};


const queue = new Queue();

queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
