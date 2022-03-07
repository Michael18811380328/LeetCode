/*
 * @lc app=leetcode.cn id=1472 lang=javascript
 *
 * [1472] 设计浏览器历史记录
 */

// @lc code=start
/**
 * @param {string} homepage
 */
// Your runtime beats 92.59 % of javascript submissions
const BrowserHistory = function(homepage) {
  back = [];
  forw = [];
  back.push(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  // 删除所有的前进记录
  forw = [];
  // 将当前记录写入历史记录
  back.push(url);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  while (steps > 0) {
    steps--;
    if (back.length > 1) {
      const tmp = back.pop();
      forw.push(tmp);
    } else {
      steps = 0;
    }
  }
  return back[back.length - 1];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  while (steps > 0) {
    steps--;
    if (forw.length > 0) {
      const tmp = forw.pop();
      back.push(tmp);
    } else {
      steps = 0;
    }
  }
  return back[back.length - 1];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end
