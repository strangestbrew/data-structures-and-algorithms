'use strict';

function Stack() {
this.top = null;
}

function Node() {
this.value = value; 
this.next = null;
}

Stack.prototype.push = function(data) {
const newTop = new Node(data);
if (this.top) {
    newTop.next = this.top;
} 
this.top = newTop;

return this.top; 
}

Stack.prototype.pop = function(){
if (this.top) {
    let itemToPop = this.top; 
    this.top = this.top.next;
}
return itemToPop; 
}

class Stack {
constructor() {
    this.top = null; 
}
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();
stack.pop();

console.log(stack);


class Queues {
constructor() {
    this.front = null;
    this.rear = null; 
}

enqueue(value){
const newRear = new Node(value);
    if (this.rear) {
        newRear.next = this.rear;
        this.rear = newRear;
    }
    
    else {
    this.front = newRear; //edge case? 
    }
    this.rear = newRear;

    return newRear; 
}   

dequeue(value){
    let current = this.rear;
    let valueDequeued; 
    while(current !== null) {
        if (current.next === this.front){
            current.next = null;
            this.front = current; 
        }
        current = current.next;
    }
    return valueDequeued;
    
}
}

const queue = new Queue();
queue.enqueue(20);
queue.enqueue(40);
queue.enqueue(60);
const dequeue = 
console.log(queue);
console.log(queue, queue.front);











let queue = [];

queue.unshift(1);

queue.unshift(2);

queue.unshift(3);

queue.pop();

queue.push();

class Node {
//pointer to
//pointer from 
}

class Stack {
constructor() {
    storage = []; //linkedlist instead of array
    this.storage = new LinkedList(); 
}

push(value){
    this.storage.push(value);
    this.append(value);

}
pop(){
    return this.removeAtEnd(); //code this
    // return this.storage.pop();
};

//isEmpty();
//peek();
//length(); 
}

class Queue {
enqueue()
dequeue()
peek()
}