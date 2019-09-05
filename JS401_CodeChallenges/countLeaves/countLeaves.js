'use strict';

class Node {
  constructor(value) 
  { 
      this.value = value; 
      this.left = null; 
      this.right = null; 
  } 
} 


class Tree { 
  constructor() 
    {
      this.root = null; 
    } 
  
  insert(value){ 
    let newNode = new Node(value); 
	  if(this.root === null) 
		  this.root = newNode; 
	  else
		  this.insertNode(this.root, newNode); 
  } 

  insertNode(node, newNode){
    if(newNode.value < node.value){
		  if(node.left === null) 
			  node.left = newNode; 
		else
			this.insertNode(node.left, newNode); 
	} else { 
    if(node.right === null) 
			node.right = newNode; 
		else
			this.insertNode(node.right,newNode); 
	  } 
  }
};

//after class code review
function findLeaf(current){
  let count = 0; 
  if (current.left === null && current.right === null){
    count++;
  } else {
    if (current.left) count += findLeaf(current.left)
    if (current.right) count += findLeaf(current.right);
  } 
  return count; 
}

function findLeafQueue(root){
  let count = 0;
  let nodeQueue = [];
  nodeQueue.push(root);
  while(nodeQueue.length){
    nodeQueue.shift();
  }
}