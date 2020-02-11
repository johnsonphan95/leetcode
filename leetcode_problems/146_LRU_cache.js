/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.size = 0; 
  this.capacity = capacity; 
  this.ll = new DoublyLinkedList();
  this.cache = {};
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const node = this.cache[key];
  if (node !== undefined) {
      this.ll.moveToFront(node)
  } else {
      return -1;
  }
  return node.val;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache[key] !== undefined) {
      this.cache[key].val = value;
      this.ll.moveToFront(this.cache[key]);
      return;
  }
  
  const node = new Node(key, value);
  
  if (this.size < this.capacity) {
      this.size++
  } else {
      const remove = this.ll.remove();
      delete this.cache[remove];
  }
  
  this.ll.insert(node);
  this.cache[key] = node;
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

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