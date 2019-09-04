'use strict';

const Node = require('./node');


class LinkedList {
  constructor(){
    this.head = null;
  }

  //this function will insert a new node at the head of the ll
  insertAtHead(value){
    const newHead = new Node(value);

    if (this.head === null) {
      this.head = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
  };

  //this function will insert a new node at the end of the ll
  insertAtEnd(value){
    if (this.head === null){
      this.head = new Node(value);
    } else {
      if (current.next === null){
        current.next = new Node(value);
      }
    }
  }

  //this function inserts a new value after an existing one
  insertAfterValue(newValue){
    if (this.head === null){
      return; //if the list is empty, stop
    } else if(this.head.next === null){
      this.head.next = new Node(newValue);
    }
  }


};

module.exports = LinkedList;
