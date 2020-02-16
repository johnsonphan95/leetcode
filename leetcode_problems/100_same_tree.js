// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:

// Input:     1         1
//           / \       / \
//          2   3     2   3

//         [1,2,3],   [1,2,3]

// Output: true
// Example 2:

// Input:     1         1
//           /           \
//          2             2

//         [1,2],     [1,null,2]

// Output: false

// recursive
var isSameTree = function(p, q) {
  if (!p && !q) return true; 
  if (!p || !q) return false; 
  
  return p.val === q.val && isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
};

//iterative
var isSameTree = function(p, q) {
  const stack = [{p, q}];
  
  while (stack.length) {
      const {p, q} = stack.pop(); 
      
      if (!p && !q) continue; 
      if (!isSame(p, q)) return false; 
      
      stack.push({p: p.left, q: q.left});
      stack.push({p: p.right, q: q.right});
  }
  return true;
}

var isSame = function(p, q) {
  return p && q && p.val === q.val;
}