'use strict';

const Node = require('./node');


class LinkedList {
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  };

  kFromEnd(k){
    let current = this.head; 
    let count = 0;
    while (current !== null){
      current = current.next; 
      count++;
    }
    if (count >= k){
      current = head;
      for (let i = 0; i < counter -k; i++){
        current = current.next;
      }

    }

    return current;
  }
};

module.exports = LinkedList;
