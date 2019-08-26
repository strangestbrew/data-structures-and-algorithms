'use strict';

import { declareOpaqueType } from "@babel/types";

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
    //lenght(); 
}

class Queue {
    enqueue()
    dequeue()
    peek()
}