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
  }

  traverse() {
   let current = this.head;
   while(current !== null) {
     console.log(current.value);
     current = current.next;
   }
  }
}




let ll = new LinkedList();
// add
ll.push(235);
ll.push(245);
ll.push(123);

ll.head;  //Object value: 235
ll.head.next; //Object value: 245
ll.head.next.next //object value: 123


module.exports = LinkedList;

