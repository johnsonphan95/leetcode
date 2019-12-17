// Given a linked list, remove the n-th node from the end of list and return its head.

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

var removeNthFromEnd = function(head, n) {
    let first = head; 
    let second = head; 
    let counter = 0; 
    
    while (counter < n) {
        second = second.next;
        counter++;
    }
    
    if (second === null) {
        return first.next; 
    }
    
    while (second.next) {
        first = first.next; 
        second = second.next;
    }
    
    first.next = first.next.next;
    return head;
};