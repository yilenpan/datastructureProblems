/*
  Determine if the tree provided is a valid binary search tree

  You have 15 trees, even cases are valid binary search trees,
  odds are not.
*/
var trees = require('./test/problem2cases');

var isValidTreeOptimized = function (tree) {
  var prev = null;
  var inOrderTrav = function (node) {
    if (node) {
      if (!inOrderTrav(node.left)) {
        return false;
      }
      if (prev && prev.value > node.value) {
        return false;
      }
      prev = node;
      return inOrderTrav(node.right);
    }
    return true;
  };
  return inOrderTrav(tree);
};


var isValidTree = function (tree) {
  var prev = null;
  var bool = true;
  var inOrderTrav = function (tree) {
    if (tree.left) {
      inOrderTrav(tree.left);
    }
    if (prev && prev.value > tree.value) {
      bool = false;
    }
    prev = tree;
    if (tree.right) {
      inOrderTrav(tree.right);
    }
  };
  inOrderTrav(tree);
  return bool;
};



trees.forEach(function (tree, i) {
  console.log(isValidTree(tree.root), (i % 2 === 0 ? 'TRUE' : 'FALSE'));
});
