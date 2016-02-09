var Trie = function (value) {
  this.value = value;
  this.children = {};
};

Trie.prototype.insert = function (value) {
  if (!this.children[value]) {
    this.children[value] = new Trie(value);
  }
};

module.exports = Trie;
