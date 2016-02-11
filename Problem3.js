/*
  Zombie Paths!!!
  You are given an array of arrays
  [
    ['a', 'b', 300],
    ['b', 'c', 12],
    ['a', 'd', 32],
    ['d', 'c', 30],
    ['b', 'e', 3000],
    ['d', 'e', 1000]
  ]

  Position[0] = a street corner
  Position[1] = a connecting street corner
  Position[2] = Number of zombies between street corners

  You have a zombie blaster, which you can only use once to BLAST away
  all of the zombies.

  Find the shortest path from point 'a' to 'e'

*/
var ds = require('./ds');
var Graph = ds.Graph;
var Heap = ds.Heap;
var testCases = require('./test/problem3cases');

var parseMap = function (map) {
  var graph = new Graph();
  map.forEach(function (testCase) {
    graph.addEdge(testCase[0], testCase[1], testCase[2]);
  });
  return graph;
};

var copy = function (extendingObj) {
  var copy = {};
  for (var key in extendingObj) {
    if (Array.isArray(extendingObj[key])) {
      copy[key] = extendingObj[key].slice();
    } else {
      copy[key] = extendingObj[key];
    }
  }
  return copy;
};


var zombiePaths = function (map, start, end) {
  var parsedMap = parseMap(map);
  var pq = new Heap(function (posPath) {
    return posPath.totalWeight;
  });

  var visited = {};

  pq.push({
    path: [start],
    totalWeight: 0,
    usedBlaster: false
  });

  while (pq.size()) {
    var currentPath = pq.pop();
    var last = currentPath.path[currentPath.path.length - 1];
    visited[last] = true;
    if (last === end) {
      return currentPath;
    }
    var lastNode = parsedMap.getNode(last);
    // loop through all edges in node
    for (var edge in lastNode) {
      // if you haven't visited the node
      if (!visited[edge]) {
        var useNothing = copy(currentPath);
        // push the edge to a copy of currentPath.paths
        useNothing.path.push(edge);
        // add the weight to the copy of currentPath
        useNothing.totalWeight += lastNode[edge];
        // shove it into the pq
        pq.push(useNothing);

        // Do the same as if we haven't used the blaster
        if (!currentPath.usedBlaster) {
          var useBlaster = copy(currentPath);
          useBlaster.usedBlaster = true;
          useBlaster.path.push(edge);
          pq.push(useBlaster);
        }
      }
    }
  }
};

testCases.forEach(function (tcase) {
  console.log('Test Case, ', tcase);
  console.log(zombiePaths(tcase, 'a', 'e'));
});
