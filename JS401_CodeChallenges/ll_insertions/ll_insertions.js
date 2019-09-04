'use strict';

const Node = require('./node');


class LinkedList {
  constructor(){
    this._length = 0; 
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

  traverse() {
   let current = this.head;
   while(current !== null) {
     console.log(current.value);
     current = current.next;
   };
  };
};

module.exports = LinkedList;
