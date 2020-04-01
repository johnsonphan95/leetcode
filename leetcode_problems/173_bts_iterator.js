// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

// Calling next() will return the next smallest number in the BST.

var BSTIterator = function(root) {
  this.stack = []; 
  this.inOrderTraversal = node => {
      while (node) {
          this.stack.push(node);
          node = node.left;
      }
  }
  this.inOrderTraversal(root);
};

BSTIterator.prototype.next = function() {
  const next = this.stack.pop();
  this.inOrderTraversal(next.right);
  return next.val;
};

BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};