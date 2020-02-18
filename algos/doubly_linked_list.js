class DoublyLinkedList {
  constructor(){
      this.head = null;
      this.tail = null;
  }
  
  insert(node) {
      if (this.head !== null) {
          node.next = this.head; 
          this.head.prev = node;
          this.head = node;
      } else {
          this.head = node; 
          this.tail = node;
      }
  }
  
  remove() {
      const evict = this.tail; 
      if (evict.prev !== null && this.tail !== this.head) {
          evict.prev.next = null;
          this.tail = evict.prev;
      } else {
          this.tail = null;
          this.head = null;
      }
      return evict.key
  }
  
  moveToFront(node) {
      if (node === this.head) return;
      if (node === this.tail) {
          node.next = this.head;
          this.head.prev = node; 
          this.tail = node.prev;
          node.prev.next = null;
          node.prev = null;
      } else {
          node.prev.next = node.next; 
          node.next.prev = node.prev; 
          node.next = this.head; 
          node.next.prev = node; 
          node.prev = null;
      }
      this.head = node;
  }
}

class Node {
  constructor(key, val) {
      this.key = key; 
      this.val = val;
      this.next = null;
      this.prev = null;
  }
}