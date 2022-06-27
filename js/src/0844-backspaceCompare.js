/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// 92 ms, 在所有 JavaScript 提交中击败了 36.98%
const backspaceCompare = function(S, T) {
  const s = fn(S);
  const t = fn(T);
  return s === t;
};

const fn = function(str) {
  if (str.indexOf('#') === -1) return str;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item !== '#') {
      arr.push(item);
    } else {
      arr.pop();
    }
  }
  return arr.join('');
};

// 思路二：直接使用字符串拼接的方式
// 84 ms
// , 在所有 JavaScript 提交中击败了
// 73.31%
const fn = function(str) {
  let index = str.indexOf('#');
  if (index === -1) return str;
  while (index > -1) {
    if (index === 0) {
      str = str.slice(1);
    } else {
      str = str.slice(0, index - 1) + str.slice(index + 1);
    }
    index = str.indexOf('#');
  }
  return str;
};

// @lc code=end

export { backspaceCompare };
