// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \     
//       4   5    
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

var diameterOfBinaryTree = function(root) {
  let res = 0; 
  
  function dfs(root) {
      if (!root) return 0; 
      let left = dfs(root.left);
      let right = dfs(root.right);
      res = Math.max(res, left + right);
      return Math.max(left,right) + 1;
  }
  
  dfs(root);
  return res;
};