/*
 * [232] 用栈实现队列
 * 88 ms, 在所有 JavaScript 提交中击败了36.25%
 */
/**
 * Initialize your data structure here.
 */
const MyQueue = function () {
  this.stack = [];
};
/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  // 队列和栈的 push 一致
  this.stack.push(x);
};
/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 队列和栈的 pop 不一致
  return this.stack.shift();
};
/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 获取第一个节点？
  return this.stack[0];
};
/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};
/**
 * Your MyQueue object will be instantiated and called as such:
 * let obj = new MyQueue()
 * obj.push(x)
 * let param_2 = obj.pop()
 * let param_3 = obj.peek()
 * let param_4 = obj.empty()
 */
