// Design a data structure that supports the following two operations:

// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

// Example:

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.

var TrieNode = function() {
  this.children = {}; 
  this.end = false; 
}

var WordDictionary = function() {
  this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function(word) {
  var current = this.root;
  
  for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
          current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
  }
  
  current.end = true;
};

WordDictionary.prototype.search = function(word) {
  const search = function(curr, level) {
      if (!curr || word.length == level && !curr.end) {
          return false;
      }
      
      if (curr.end && word.length == level) {
          return true;
      }
      
      if (word[level] == '.') {
          for (let i = 0; i < 26; i++) {
              const char = String.fromCharCode(97 + i);
              
              if (search(curr.children[char], level + 1)) {
                  return true;
              }
          }
          return false;
      }
      return search(curr.children[word[level]], level + 1)
  }
  
  return search(this.root, 0)
};