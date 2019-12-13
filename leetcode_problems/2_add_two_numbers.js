// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

var addTwoNumbers = function(l1, l2) {
    let before = new ListNode(); 
    let node = before; 
    let c = 0; 
    
    while (l1 || l2 || c) {
        const val1 = l1 ? l1.val : 0; 
        const val2 = l2 ? l2.val : 0; 
        const sum = val1 + val2 + c;
        
        node.next = new ListNode(sum % 10);
        node = node.next; 
        c = Math.floor(sum / 10);
        l1 = l1 && l1.next; 
        l2 = l2 && l2.next; 
    }
    
    return before.next
};