/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */
// 思路1：插入的时候随便插入
// 然后找中位数时，排序然后获取中位数
// 这样效果不是很好
// Your runtime beats 25.89 % of javascript submissions
// 4912 ms
// @lc code=start
/**
 * initialize your data structure here.
 */
const MedianFinder = function() {
  list = [];
};
/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  list.push(num);
};
/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = list.length;
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return list[0];
  } else if (len === 2) {
    return (list[0] + list[1]) / 2;
  }
  list.sort((a, b) => a - b);
  if (len % 2 === 1) {
    // 找到中间的数字即可
    const index = (len - 1) / 2;
    return list[index];
  } else {
    const index = len / 2;
    return (list[index - 1] + list[index]) / 2;
  }
};

// 思路二：插入的时候按照二分法对已经排序的数组插入
// 寻找中位数直接可以找到
// 300 ms
// , 在所有 JavaScript 提交中击败了
// 86.61%
const MedianFinder2 = function() {
  list = [];
};

MedianFinder2.prototype.addNum = function(num) {
  const len = list.length;
  if (len === 0) {
    list.push(num);
  } else if (num < list[0]) {
    list.unshift(num);
    return;
  } else if (num > list[list.length - 1]) {
    list.push(num);
    return;
  }
  // 当新数字介于已有数字时，使用二分法插入
  let start = 0;
  let end = len - 1;
  while (start < end) {
    const middle = Math.ceil((start + end) / 2);
    if (list[middle] > num) {
      end = middle;
    } else if (list[middle] < num) {
      start = middle;
    } else {
      // list[middle] === num
      list.splice(middle, 0, num);
      return;
    }
    if (start === end - 1) {
      list.splice(end, 0, num);
      return;
    }
  }
};

MedianFinder2.prototype.findMedian = function() {
  const len = list.length;
  if (len === 0) {
    return 0;
  } else if (len === 1) {
    return list[0];
  } else if (len === 2) {
    return (list[0] + list[1]) / 2;
  }
  if (len % 2 === 1) {
    const index = (len - 1) / 2;
    return list[index];
  } else {
    const index = len / 2;
    return (list[index - 1] + list[index]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * let obj = new MedianFinder()
 * obj.addNum(num)
 * let param_2 = obj.findMedian()
 */
// @lc code=end

export { MedianFinder, MedianFinder2 };
