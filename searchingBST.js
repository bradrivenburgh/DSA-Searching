const BST = require('./BinarySearchTree');
/*
4. Searching in a BST
** No coding is needed for these drills**. Once you have answered it, 
you can then code the tree and implement the traversal to see if your 
answer is correct.

1) Given a binary search tree whose in-order and pre-order traversals 
are respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
What would be its postorder traversal?

2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
What is its pre-order traversal?

5. Implement different tree traversals
*/

/*Answers
1. Guess: 14, 19, 15, 27, 25, 79, 90, 91, 89, 35
2. Guess: 8, 6, 5, 7, 10, 9, 11
*/

const bstOne = new BST();
[25,15,50,10,24,35,70,4,12,18,31,44,66,90,22]
  .forEach(num => bstOne.insert(num, num));

const bstFromQFourA = new BST();
[35, 25, 15, 14, 19, 27, 89, 79, 91, 90]
  .forEach(num => bstFromQFourA.insert(num, num));

const bstFromQFourB = new BST();
[8, 6, 5, 7, 10, 9, 11]
  .forEach(num => bstFromQFourB.insert(num, num));


function inOrder(t, values = []) {
  if (!t) {
    return null;
  }
  if (t.left) { // Go left
    inOrder(t.left, values); // Keep going till null
  }
  values.push(t.value); // Handle node
  if (t.right) { // Go right
    inOrder(t.right, values); // Keep going till null
  }
  return values; // Return array
}

function preOrder(t, values = []) {
  if (!t) {
    return null;
  }
  values.push(t.value); // Handle node
  if (t.left) { // Go left
    preOrder(t.left, values); // Keep going till null
  }
  if (t.right) { // Go right
    preOrder(t.right, values); // Keep going till null
  }
  return values; // Return array
}

function postOrder(t, values = []) {
  if (!t) {
    return null;
  }
  if (t.left) { // Go left
    postOrder(t.left, values); // Keep going till null
  }
  if (t.right) { // Go right
    postOrder(t.right, values); // Keep going till null
  }
  values.push(t.value); // Handle node
  return values; // Return array
}

console.log('Question 5:')
console.log('preOrder', preOrder(bstOne)); // [25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90]
console.log('inOrder', inOrder(bstOne)); // [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
console.log('postOrder', postOrder(bstOne)); // [4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25]

console.log('Question 4A:')
console.log('preOrder', preOrder(bstFromQFourA)); // [35, 25, 15, 14, 19, 27, 89, 79, 91, 90]
console.log('inOrder', inOrder(bstFromQFourA)); // [14, 15, 19, 25, 27, 35, 79, 89, 90, 91]
console.log('postOrder', postOrder(bstFromQFourA)); //[14, 19, 15, 27, 25, 79, 90, 91, 89, 35]

console.log('Question 4B:')
console.log('preOrder', preOrder(bstFromQFourB)); // [8, 6,  5, 7, 10, 9, 11]
console.log('inOrder', inOrder(bstFromQFourB)); // [5,  6,  7, 8, 9, 10, 11]
console.log('postOrder', postOrder(bstFromQFourB)); // [5,  7, 6, 9, 11, 10, 8]