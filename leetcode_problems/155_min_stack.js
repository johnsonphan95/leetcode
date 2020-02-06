var MinStack = function() {
  this.minStack = [];
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  const newMin = { min: x, val: x };
  if (this.minStack.length) {
    const last = this.minStack[this.minStack.length - 1];
    newMin.min = Math.min(last.min, x);
  }
  this.minStack.push(newMin);
  this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop();
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1].min;
};
