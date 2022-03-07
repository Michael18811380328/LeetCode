/**
 * Initialize your data structure here.
 */
const MyStack = function() {
  this.arr = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
// 关键是队列无法直接获取最后一个元素
// 那么真实情况下，可以循环一次操作，拿到或者删除当前的最后一个元素
// 题目中，直接使用数组解决
MyStack.prototype.push = function(x) {
  this.arr.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.arr.pop();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.arr[this.arr.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.arr.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * let obj = new MyStack()
 * obj.push(x)
 * let param_2 = obj.pop()
 * let param_3 = obj.top()
 * let param_4 = obj.empty()
 */
