/*
 * @lc app=leetcode.cn id=284 lang=javascript
 *
 * [284] 顶端迭代器
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */
// 数组：Your runtime beats 32.5 % of javascript submissions
// 单变量：Your runtime beats 95 % of javascript submissions
// 可以改一下数组
/**
 * @param {Iterator} iterator
 */
const PeekingIterator = function(iterator) {
  this.iterator = iterator;
  this.cache = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  // 执行这个方法，不会改变当前的next（需要获取顶端元素）
  // 先把这个元素输出来，放在缓存器中
  // 然后调用下面两个方法时，先访问缓存器的部分
  if (this.cache || this.cache === 0) {
    return this.cache;
  } else {
    const item = this.iterator.next();
    this.cache = item;
    return item;
  }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  if (this.cache || this.cache === 0) {
    const tmp = this.cache;
    this.cache = null;
    return tmp;
  } else {
    return this.iterator.next();
  }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  if (this.cache || this.cache === 0) {
    return true;
  } else {
    return this.iterator.hasNext();
  }
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * let obj = new PeekingIterator(arr)
 * let param_1 = obj.peek()
 * let param_2 = obj.next()
 * let param_3 = obj.hasNext()
 */
// @lc code=end
