/*
  T9 Autocomplete
  Convert a prefix into a list of words starting with that prefix
*/
var dict = require('./test/problem4cases').dict;
var prefixes = require('./test/problem4cases').prefixes;
var ds = require('./ds');
var Trie = ds.Trie;

var insertWords = function (words) {
  return words.reduce(function (trie, word) {
    insertWord(trie, word);
    return trie;
  }, new Trie(null));
};

var insertWord = function (trie, word) {
  if (!word.length) {
    trie.isWord = true;
    return;
  }
  trie.children[word[0]] = trie.children[word[0]] || new Trie(word[0]);
  return insertWord(trie.children[word[0]], word.slice(1));
};

var getStartNode = function (trie, prefix) {
  if (prefix.length === 1) {
    return trie;
  }
  if (trie.children[prefix[0]]) {
    return getStartNode(trie.children[prefix[0]], prefix.slice(1));
  } else {
    return trie;
  }
};

var getWordsFromPrefix = function (trie, prefix) {
  var results = [];
  var innerFn = function (trie, word) {
    if (trie.isWord) {
      results.push(word);
    }
    for (var child in trie.children) {
      innerFn(trie.children[child], word + child);
    }
  };
  innerFn(getStartNode(trie, prefix), prefix);
  return results;
};

var loadedDict = insertWords(dict);
prefixes.forEach(function (prefix) {
  console.log('Prefix', prefix);
  console.log(getWordsFromPrefix(loadedDict, prefix));
});
