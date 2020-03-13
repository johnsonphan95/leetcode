var inorderTraversal = function(root) {
  let stack = []; 
  let res = []; 
  let curr = root; 
  while (curr || stack.length) {
      while (curr !== null) {
          stack.push(curr);
          curr = curr.left;
      }
      curr = stack.pop(); 
      res.push(curr.val);
      curr = curr.right;
  }
  return res;
};