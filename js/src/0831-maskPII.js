/*
 * @lc app=leetcode.cn id=831 lang=javascript
 *
 * [831] 隐藏个人信息
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
//  Your runtime beats 100 % of javascript submissions
const maskPII = function(s) {
  // 两个字符串的拼接题目
  if (s.includes('@')) {
    // 这是邮箱
    s = s.toLowerCase();
    const index = s.indexOf('@');
    const front = s.slice(0, index);
    const end = s.slice(index);
    const nameHead = front[0];
    const nameTail = front[front.length - 1];
    return `${nameHead}*****${nameTail}${end}`;
  }
  // 处理电话号码
  const str = s.replace(/[\+\-\(\)\s+]/ig, '');
  const tail = str.slice(-4);
  if (str.length === 10) {
    return `***-***-${tail}`;
  } else if (str.length === 11) {
    return `+*-***-***-${tail}`;
  } else if (str.length === 12) {
    return `+**-***-***-${tail}`;
  }
  // length === 13
  else {
    return `+***-***-***-${tail}`;
  }
};
// @lc code=end
