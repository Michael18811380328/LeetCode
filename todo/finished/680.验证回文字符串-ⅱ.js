/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// Your runtime beats 92.87 % of javascript submissions
var validPalindrome = function(s) {
  return testString(s, true);
}

var testString = function(s, flag) {
  let len = s.length;
  if (len < 2) return true;
  let half = Math.floor(len / 2);
  for (let i = 0; i <= half; i++) {
    if (s[i] !== s[len - 1 - i]) {
      if (flag === false) return false;
      if (
        (i === half) ||
        (len - 1 - i - 1 === half) ||
        (s[i + 1] === s[len - 1 - i] && i < half) ||
        (s[i] === s[len - 1 - i - 1] && len - 1 - i - 1 > half)
      ) {
        let s1 = s.slice(0, i) + s.slice(i + 1);
        let s2 = s.slice(0, len - 1 - i) + s.slice(len - i);
        return testString(s1, false) || testString(s2, false);
      }
      else {
        return false;
      }
    }
  }
  return true;
};

// @lc code=end

