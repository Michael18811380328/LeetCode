/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */
// Your runtime beats 89.97 % of javascript submissions
// @lc code=start
/**
 * @param {number} k
 */
const MyCircularQueue = function(k) {
  arr = [];
  maxLen = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (arr.length < maxLen) {
    arr.push(value);
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (arr.length > 0) {
    arr.shift();
    return true;
  }
  return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return arr.length > 0 ? arr[0] : -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return arr.length > 0 ? arr[arr.length - 1] : -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return arr.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return arr.length === maxLen;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * let obj = new MyCircularQueue(k)
 * let param_1 = obj.enQueue(value)
 * let param_2 = obj.deQueue()
 * let param_3 = obj.Front()
 * let param_4 = obj.Rear()
 * let param_5 = obj.isEmpty()
 * let param_6 = obj.isFull()
 */
// @lc code=end

export { MyCircularQueue };
