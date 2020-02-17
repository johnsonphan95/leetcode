// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.

var connect = function(root) {
  if (!root) return root;
  let queue = [root]; 
  
  while (queue.length) {
      let level = [];
      let size = queue.length; 
      while (size > 0) {
          let node = queue.shift();
          node.next = queue[0] || null;
          if (node.left && node.right) {
              level.push(node.left); 
              level.push(node.right);
          }
      size--;
      }
  queue = level; 
  }
  return root;
};