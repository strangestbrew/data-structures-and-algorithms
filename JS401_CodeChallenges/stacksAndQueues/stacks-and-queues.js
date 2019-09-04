'use strict';


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

// front function 
front() 
{ 
if(this.isEmpty()) 
    return 'Empty!'; 
return this.items[0]; 
} 

const queue = new Queue();

queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
