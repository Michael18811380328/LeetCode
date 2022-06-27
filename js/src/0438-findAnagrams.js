/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// Your runtime beats 5.14 % of javascript submissions
// 思路1：遍历一次数组，然后判断每个元素是否满足
// 现在暴力解法性能太差。。。
// 较好的解法是双指针滑动窗口解法？？？
const findAnagrams = function(s, p) {
  const dict = {};
  const len = p.length;
  for (let i = 0; i < len; i++) {
    const key = p[i];
    if (dict[key]) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }
  // 可以改成下面的简化写法
  // [...p].forEach(c => need[c] ? need[c]++ : need[c] = 1);
  // 然后遍历每一个子串
  const res = [];
  for (let i = 0; i <= s.length - len; i++) {
    const subStr = s.slice(i, i + len);
    if (check(subStr, dict)) {
      res.push(i);
    }
  }
  return res;
};

const check = (str, DICT) => {
  const dict = { ...DICT };
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const key = str[i];
    if (!dict[key] || dict[key] === 0) {
      return false;
    } else {
      dict[key]--;
    }
  }
  return true;
};
// @lc code=end

export { findAnagrams };
