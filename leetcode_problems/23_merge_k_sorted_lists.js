// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

// Example:

// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6

var mergeKLists = (lists) => {
    let root = lists[0];
    for (let i = 1; i < lists.length; i++) {
        root = merge(root, lists[i]);
    }
    return root || null;
}

var merge = (list1, list2) => {
    if (!list1 || !list2) return list1 || list2;

    let node = {};
    const root = node; 
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            node.next = list1;
            list1 = list1.next; 
        } else {
            node.next = list2; 
            list2 = list2.next;
        }
        node = node.next
    }
    node.next = list1 || list2;
    return root.next; 
}