// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    const level = [];
    while (size > 0) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      size--;
    }
    res.push(level);
  }
  return res;
};
