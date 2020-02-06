var getIntersectionNode = function(headA, headB) {
  let lenA = 0;
  let lenB = 0;

  let node = headA;
  while (node) {
    lenA++;
    node = node.next;
  }

  node = headB;
  while (node) {
    lenB++;
    node = node.next;
  }
  while (lenA > lenB) {
    headA = headA.next;
    lenA--;
  }

  while (lenB > lenA) {
    headB = headB.next;
    lenB--;
  }

  while (headA) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};
