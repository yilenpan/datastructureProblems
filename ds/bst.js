var BST = function () {
  this.root = null;
};

var Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function (value, currentNode) {
  if (!this.root) {
    this.root = new Node(value);
    return;
  }

  currentNode = currentNode || this.root;

  if (value > currentNode.value) {
    if (!currentNode.left) {
      currentNode.left = new Node(value);
    } else {
      this.insert(value, currentNode.left);
    }
  } else if (value < currentNode.value) {
    if (!currentNode.right) {
      currentNode.right = new Node(value);
    } else {
      this.insert(value, currentNode.right);
    }
  } else {
    return;
  }

};

BST.prototype.inorderTraversal = function (callback, currentNode) {
  if (!this.root) {
    return;
  }
  currentNode = currentNode || this.root;
  if (currentNode.left) {
    this.inorderTraversal(callback, currentNode.left);
  }
  callback(currentNode);
  if (currentNode.right) {
    this.inorderTraversal(callback, currentNode.right)
  }
};


module.exports = BST;
