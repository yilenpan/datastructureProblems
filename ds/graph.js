var Graph = function () {
  this.storage = {};
};

Graph.prototype.addNode = function (node) {
  this.storage[node] = {};
};

Graph.prototype.addEdge = function (startNode, endNode, weight) {
  this.storage[startNode][endNode] = weight;
};

Graph.prototype.getEdgeWeight = function (startNode, endNode) {
  return this.storage[startNode][endNode];
};

Graph.prototype.removeEdge = function (startNode, endNode) {
  delete this.storage[startNode][endNode];
};

Graph.prototype.removeNode = function (node) {
  delete this.storage[node];
};

module.exports = Graph;
