// Invert a binary tree.

var invertTree = function(root) {
  if (!root) return root; 
  
  let queue = [root];
  
  while (queue.length) {
      let curr = queue.pop();
      if (curr === null) continue;
      [curr.left, curr.right] = [curr.right, curr.left];
      queue.push(curr.left, curr.right);
  }
  
  return root;
};