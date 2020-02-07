var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // slow is now at the middle node whether even or odd length list
  let half = reverse(slow);
  while (head && half) {
    if (head.val !== half.val) return false;
    head = head.next;
    half = half.next;
  }
  return true;
};

var reverse = function(node) {
  let prev = null;
  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};
