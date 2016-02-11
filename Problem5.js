/*
  Custom Data Structure...
  Build me a Data structure that has...
  Constant time insert
  Constant time retrieval
  Constant time deletion
  Constant time randomization
*/
var HashTable = require('./ds').HashTable;
var CustomDataStructure = function () {
  // TODO: Make actual hash table
  this.storage = new HashTable();
  this.map = [];
};

CustomDataStructure.prototype.insert = function (key, value) {
  // insert key into map
  this.map.push(key);
  var position = this.map.length - 1;
  // insert key, value, pos in hash table
  this.storage.insert(key, [key, value, position]);

};

CustomDataStructure.prototype.get = function (key) {
  return this.storage.get(key)[1];
};

CustomDataStructure.prototype.delete = function (key) {
  // pop last item off map
  var lastItemMap = this.map.pop();
    // get the last item from storage
  var lastItem = this.storage.get(lastItemMap);
  // get item from storage
  var delItem = this.storage.get(key);
  var delItemMapPos = delItem[2];
  // set former last item's map position to current item's
  this.map[delItemMapPos] = lastItem[0];
  lastItem[2] = delItemMapPos;
  // remove item from storage
  return this.storage.remove(key)[1];
};
CustomDataStructure.prototype.random = function () {
  return this.storage.get(this.map[Math.floor(Math.random() * this.map.length)]);
};
