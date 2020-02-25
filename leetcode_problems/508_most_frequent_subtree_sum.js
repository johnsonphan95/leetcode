// Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

// Examples 1
// Input:

//   5
//  /  \
// 2   -3
// return [2, -3, 4], since all the values happen only once, return all of them in any order.
// Examples 2
// Input:

//   5
//  /  \
// 2   -5
// return [2], since 2 happens twice, however -5 only occur once.

var findFrequentTreeSum = function(root) {
  var res = [],
      hash = {},
      max = 0;
      
  findSum(root);

  for (var key in hash) {
      if (hash[key] === max) {
          res.push(parseInt(key));
      }
  }
  return res;

  function findSum(root) {
      var left, right;
      if (!root) return 0;

      left = findSum(root.left);
      right = findSum(root.right);

      sum = left + right + root.val;
      root.val = sum;
      hash[sum] = (hash[sum] || 0) + 1;
      max = Math.max(max, hash[sum]);
      return sum;
  }
};