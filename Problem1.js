/*
Flatten a binary search tree into linked lists by levels, such that...

            4
        2       6
      1  3     5  7
      Flattens to...
      {
        0: {4},
        1: {2} -> {6},
        3: {1} -> {3} -> {5} -> {7}
      }

NOTE: feel free to rewrite any methods.
NOTE: Linked List does not have to be in order
NOTE: There is a property on the BST that i've added called flattenedBST.
      It's just an empty object. Set the flattenedBST[level] should be a new LinkedList();

*/

var BinaryTree = require('./ds').BinaryTree;
var Node = require('./ds').BSTNode;
var LinkedList = require('./ds').LinkedList;
var testCases = require('./test/problem1cases');


BinaryTree.prototype.levelInsert = function () {
  // TODO: Implement
};




/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////

// Makes array Binary Trees
testCases.map(function (testCase) {
  return testCase.reduce(function (tree, number) {
    // addes all the numbers from testCase into the BinaryTree
    tree.levelInsert(number);
    // adds the array of numbers to the tree just so it prints pretty
    tree.input = testCase;
    return tree;
  }, new BinaryTree());

}).forEach(function (testCase) {
  // Prints testCases
  console.log('TestCase: ', testCase);
  for (var level in testCase.flattenedBST) {
    // What level we're on
    console.log("Level: ", level);
    var str = '';
    // Traverses the linkedList
    testCase.flattenedBST[level].traverse(function (n) {
      str += n.value + ' ';
    });
    // Prints the values on each level
    console.log(str);
  }
});
