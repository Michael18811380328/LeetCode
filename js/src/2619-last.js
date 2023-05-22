// https://leetcode.cn/problems/array-prototype-last/
// eslint-disable-next-line no-extend-native
Array.prototype.last = function() {
  return this.length > 0 ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
