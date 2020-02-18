// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {
  let prev = null; 
  let curr = head; 
  while (curr){
      let forward = curr.next; 
      curr.next = prev; 
      prev = curr; 
      curr = forward; 
  }
  return prev;
};