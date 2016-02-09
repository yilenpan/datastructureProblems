// DS is all of your data structures
var ds = require('./ds');
var BinaryTree = ds.BinaryTree;
var LinkedList = ds.LinkedList;

/*
  Flatten a binary search tree into linked lists by levels, such that...

              4
           2     6
        1  3    5  7
 Flattens to...
  {
    0: [4],
    1: [2, 6],
    3: [1, 3, 5, 7]
  }

  NOTE: feel free to rewrite any methods.
*/
