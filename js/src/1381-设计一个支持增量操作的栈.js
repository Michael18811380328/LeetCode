/*
 * @lc app=leetcode.cn id=1381 lang=javascript
 *
 * [1381] 设计一个支持增量操作的栈
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
// Your runtime beats 23.3 % of javascript submissions
const CustomStack = function(maxSize) {
  stack = [];
  max = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (stack.length < max) {
    stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  return stack.length === 0 ? -1 : stack.pop();
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = 0; i < k; i++) {
    if (stack[i] || stack[i] === 0) {
      stack[i] += val;
    } else {
      break;
    }
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end
