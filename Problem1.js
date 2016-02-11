/*
Flatten a binary search tree into linked lists by levels, such that...

      4
  2       6
1  3     5  7
Flattens to...
{
  0: [4],
  1: [2, 6],
  3: [1, 3, 5, 7]
}

NOTE: feel free to rewrite any methods.
NOTE: Linked List does not have to be in order
NOTE: THere is a property on the BST that i've added called flattenedBST.
      It's just an empty object.
*/

var BinaryTree = require('./ds').BinaryTree;
var Node = require('./ds').BSTNode;
var LinkedList = require('./ds').LinkedList;
var testCases = require('./test/problem1cases');


BinaryTree.prototype.levelInsert = function (value, currentNode, level) {

  // init level to 0 and the this.flattenedBST level as a new linked list
  level = level === undefined ? 0 : level;
  // if BST is empty, set root node
  if (!this.root) {
    this.root = new Node(value);
    this.flattenedBST[0] = new LinkedList()
    this.flattenedBST[level].addToTail(this.root.value);
    return;
  }

  // The reason why we increment level here is because tree will have
  // no left or right, a recursive call won't be made.
  currentNode = currentNode || this.root;
  level++;
  this.flattenedBST[level] = this.flattenedBST[level] === undefined ? new LinkedList() : this.flattenedBST[level];
  var node;

  if (value < currentNode.value) {
    if (!currentNode.left) {
      currentNode.left = new Node(value);
      node = currentNode.left;
    } else {
      this.levelInsert(value, currentNode.left, level);
    }
  } else if (value > currentNode.value) {
    if (!currentNode.right) {
      currentNode.right = new Node(value);
      node = currentNode.right;
    } else {
      this.levelInsert(value, currentNode.right, level);
    }
  }
  if (node) {
    this.flattenedBST[level].addToTail(node.value);
  }
};


testCases.map(function (testCase) {
  return testCase.reduce(function (tree, number) {
    tree.levelInsert(number);
    tree.input = testCase;
    return tree;
  }, new BinaryTree());
}).forEach(function (testCase) {
  console.log(testCase.input);
  for (var level in testCase.flattenedBST) {
    console.log('level ', level);
    var str = '';
    testCase.flattenedBST[level].traverse(function (n) {
      str += n.value + ' ';
    });
    console.log(str);
  }
});
