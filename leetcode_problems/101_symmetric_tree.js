// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
 

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// recursive
var isSymmetric = function(root) {
  return isMirror(root, root);
};

var isMirror = function (t1, t2) {
  if (!t1 && !t2) return true; 
  if (!t1 || !t2) return false; 
  
  return t1.val === t2.val && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right)
}

// iterative
var isSymmetric = function(root) {
  const queue = [root, root]; 
  
  while (queue.length) {
      let t1 = queue.shift(); 
      let t2 = queue.shift(); 
      if (!t1 && !t2) continue; 
      if (!t1 || !t2) return false; 
      if (t1.val !== t2.val) return false;
      queue.push(t1.left);
      queue.push(t2.right);
      queue.push(t1.right);
      queue.push(t2.left);
  }
  return true;
}