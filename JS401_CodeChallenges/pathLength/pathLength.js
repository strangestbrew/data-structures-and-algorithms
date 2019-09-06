'use strict';

// head or tail recursion 
// find parent
// find count 

const pathLength = (tree, parent, child ) => {

  
  if (tree === null) {
    return null;
  }

  if(tree.value === parent) {
    let lengthSoFar = 0;
    return countPathLength(tree.child, lengthSoFar); 

  } else {
    
    return pathLength(tree.left, parent, child) || pathLength(tree.right, parent, child);

    // let leftVal = pathLength(tree.left);
    // if(leftVal) {
    //   return leftVal;
    // } else {
    //   return pathLength(tree.right);
    // }

  };
  
};

const countPathLength = (root, child, lengthSoFar) => {
  if (root === null) {
    return null; 
  } 
  if (root.value === child) {
    return lengthSoFar;
  } else {
    return countPathLength(root.left, child, lengthSoFar+1) || 
    countPathLength(root.right, child, lengthSoFar+1); 
  }
};

//is the value we are looking at the parent right now? if not, return "or" 
// look left and right, is the parent there? if YES jump into helper - helper asks "did you find child right now?"
// if NO, return "or"
// if YES, it is true! the entire tree will return with the length value 
