// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:

// Return 0 if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:

// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]

// Output: 5

// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:

// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]

// Output: 0

// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

const ladderLength = (beginWord, endWord, wordList) => {
  let seen = new Set();
  let dict = new Set(wordList);
  let count = 1;

  let queue = [beginWord];
  while (queue.length) {
    let next = [];
    for (let word of queue) {
      if (word === endWord) return count;

      let chars = word.split("");
      for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < 26; j++) {
          chars[i] = String.fromCharCode(97 + j);
          const newWord = chars.join("");
          if (!seen.has(newWord) && dict.has(newWord)) {
            next.push(newWord);
            seen.add(newWord);
          }
          chars[i] = word[i];
        }
      }
    }
    queue = next;
    count++;
  }
  return 0;
};
