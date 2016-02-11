/*
  Determine if the tree provided is a valid binary search tree

  You have 15 trees, even cases are valid binary search trees,
  odds are not.
*/

var isValidTree = function (tree) {
  // TODO: Implement
};


/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////

var trees = require('./test/problem2cases');
trees.forEach(function (tree, i) {
  console.log(isValidTree(tree.root), (i % 2 === 0 ? 'TRUE' : 'FALSE'));
});
