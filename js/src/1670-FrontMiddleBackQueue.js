/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start
// Your runtime beats 45.9 % of javascript submissions
const FrontMiddleBackQueue = function() {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.arr.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  const len = this.arr.length;
  const index = Math.floor(len / 2);
  this.arr.splice(index, 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.arr.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
  if (this.arr.length === 0) {
    return -1;
  }
  return this.arr.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (this.arr.length === 0) {
    return -1;
  }
  const len = this.arr.length;
  const index = Math.floor((len - 0.1) / 2);
  return this.arr.splice(index, 1);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
  if (this.arr.length === 0) {
    return -1;
  }
  return this.arr.pop();
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * let obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * let param_4 = obj.popFront()
 * let param_5 = obj.popMiddle()
 * let param_6 = obj.popBack()
 */
// @lc code=end
export { FrontMiddleBackQueue };
