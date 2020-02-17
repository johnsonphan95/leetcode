// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example:

// Given the sorted linked list: [-10,-3,0,5,9],

// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

// O(N) time O(N) space
var sortedListToBST = function(head) {
  let arr = [];
  
  while (head) {
      arr.push(head.val);
      head = head.next;
  }
  
  var recur = (start, end) => {
      if (start > end) return null;
      let mid = Math.floor((start + end) / 2);
      let node = new TreeNode(arr[mid]);
      if (start === end) return node;
      node.left = recur(start, mid - 1);
      node.right = recur(mid + 1, end);
      return node;
  }
  
  return recur(0, arr.length - 1);
};

//O(NlogN) time && O(NlogN) space
var sortedListToBST = function (head) {
	if (head === null) return null;
	return helper(head, null);
};

var helper = function (head, tail) {
	if (head === tail) return null;
	let slow = head;
	let fast = head;
	while (fast !== tail && fast.next !== tail) {
		fast = fast.next.next;
		slow = slow.next;
	}
	let root = new TreeNode(slow.val);
	root.left = helper(head, slow);
	root.right = helper(slow.next, tail);
	return root;
}