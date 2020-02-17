// Given a linked list, rotate the list to the right by k places, where k is non-negative.

// Example 1:

// Input: 1->2->3->4->5->NULL, k = 2
// Output: 4->5->1->2->3->NULL
// Explanation:
// rotate 1 steps to the right: 5->1->2->3->4->NULL
// rotate 2 steps to the right: 4->5->1->2->3->NULL
// Example 2:

// Input: 0->1->2->NULL, k = 4
// Output: 2->0->1->NULL
// Explanation:
// rotate 1 steps to the right: 2->0->1->NULL
// rotate 2 steps to the right: 1->2->0->NULL
// rotate 3 steps to the right: 0->1->2->NULL
// rotate 4 steps to the right: 2->0->1->NULL

var rotateRight = function(head, k) {
  if (!head || !head.next) {
      return head;    
  }
  
  let cur = head;    
  let count = 0;
  let prev = null;
  
  // getting length of the linked list as count
  while (cur) {
      cur = cur.next;
      count++;
  }
  
  k = k % count;
  
  cur = head;

  while (cur && k > 0) {
      if (cur.next) {
          prev = cur;
          cur = cur.next;
          continue;
      }
      
      // Out of if statement above means cur is now at the tail
      // we will now set cur to be the head
      cur.next = head;
      head = cur;
      
      // now that cur is the head, prev is now the tail, still points
      // to cur so must now point to null to finalize it as the tail
      prev.next = null;
      
      k--;
  }

  return head;  
}