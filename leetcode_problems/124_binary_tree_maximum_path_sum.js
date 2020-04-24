// Given a non-empty binary tree, find the maximum path sum.

// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42

var maxPathSum = function(root) {
  let result = -Infinity;
  
  const dfs = (node) => {
      if (node == null) return 0;
      const left = Math.max(0, dfs(node.left));
      const right = Math.max(0, dfs(node.right));
      result = Math.max(result, left + right + node.val);
      return Math.max(left, right) + node.val;
  }
  
  dfs(root);
  return result;
};