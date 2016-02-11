/*
  T9 Autocomplete
  Convert a prefix into a list of words starting with that prefix
*/
var ds = require('./ds');
var Trie = ds.Trie;

var insertWord = function (trie, word) {
  // TODO: Implement
};

var getWordsFromPrefix = function (trie, prefix) {
  // TODO: Implement
};

/////////////////////////////////////////////////////////////
// HELPERS
/////////////////////////////////////////////////////////////

// Takes the Array of words and adds each one into a trie
var insertWords = function (words) {
  return words.reduce(function (trie, word) {
    insertWord(trie, word);
    return trie;
  }, new Trie(null) /* ROOT OF TRIE */);
};

var getStartNode = function (trie, prefix) {
  // Returns the trie that the prefix ends on, not the next one.
  if (prefix.length === 1) {
    return trie;
  }
  if (trie.children[prefix[0]]) {
    return getStartNode(trie.children[prefix[0]], prefix.slice(1));
  } else {
    // If no corresponding children, just return the trie
    return trie;
  }
};


/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////

var dict = require('./test/problem4cases').dict;
var prefixes = require('./test/problem4cases').prefixes;
var loadedDict = insertWords(dict);
prefixes.forEach(function (prefix) {
  console.log('Prefix', prefix);
  console.log(getWordsFromPrefix(loadedDict, prefix));
});
