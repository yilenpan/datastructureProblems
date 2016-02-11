/*
  Determine if the tree provided is a valid binary search tree

  You have 15 trees, even cases are valid binary search trees,
  odds are not.
*/
var trees = require('./test/problem2cases');


var isValidTree = function (tree) {
  // TODO: Implement
};



trees.forEach(function (tree, i) {
  console.log(isValidTree(tree.root), (i % 2 === 0 ? 'TRUE' : 'FALSE'));
});
