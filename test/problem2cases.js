var BinaryTree = require('../ds').BinaryTree;
var range = require('../ds').range;
var Node = require('../ds').BSTNode;

BinaryTree.prototype.badInsert = function (value, currentNode) {
  if (!this.root) {
    this.root = new Node(value);
    return;
  }
  currentNode = currentNode || this.root;
  var random = Math.floor(Math.random() * 6);
  if (random % 2 === 0) {
    if (!currentNode.left) {
      currentNode.left = new Node(value);
    } else {
      this.badInsert(value, currentNode.left);
    }
  } else {
    if (!currentNode.right) {
      currentNode.right = new Node(value);
    } else {
      this.badInsert(value, currentNode.right);
    }
  }

};

module.exports = range(15, 0).map(function (n, i) {
    var tree = new BinaryTree();
    for (var j = 0; j < 10; j++) {
      if (i % 2 === 0) {
        tree.insert(Math.floor(Math.random() * 10));
      } else {
        tree.badInsert(Math.floor(Math.random() * 10));
      }
    }
    return tree;
  });
