/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
// Your runtime beats 63.16 % of javascript submissions
// 思路二：使用栈实现
const RecentCounter = function() {
  this.count = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // 后进去的大于以前的情况，那么直接比较即可
  // 清空之前不合法的请求
  while (this.count[0] < t - 3000) {
    this.count.shift();
  }
  // 加入现在的请求
  this.count.push(t);
  // 然后计算当前请求的数量
  return this.count.length;
};

// @lc code=start
// Your runtime beats 63.16 % of javascript submissions
// 思路二：使用栈实现
const RecentCounter2 = function() {
  this.count = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter2.prototype.ping = function(t) {
  // 后进去的大于以前的情况，那么直接比较即可
  // 清空之前不合法的请求
  while (this.count[0] < t - 3000) {
    this.count.shift();
  }
  // 加入现在的请求
  this.count.push(t);
  // 然后计算当前请求的数量
  return this.count.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * let obj = new RecentCounter()
 * let param_1 = obj.ping(t)
 */
// @lc code=end

export { RecentCounter };
