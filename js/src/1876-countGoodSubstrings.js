/**
 * @param {string} s
 * @return {number}
 */
// 108 ms, 在所有 JavaScript 提交中击败了13.79%
// 思路一：效率不好，需要比较多次
var countGoodSubstrings1 = function(s) {
  const len = s.length;
  // if length is 1 or 2, the result is 0
  if (len <= 2) {
    return 0;
  }
  // 辅助函数，判断是否是好的子字符串
  let isGood = function(str) {
    if (str.length !== 3) {
      return false;
    }
    if (str[0] !== str[1] && str[1] !== str[2] && str[2] !== str[0]) {
      return true;
    }
    return false;
  };
  let res = 0;
  for (let i = 0; i < len; i++) {
    let current = s.slice(i, i + 3);
    if (isGood(current)) {
      res += 1;
    }
  }
  return res;
};

// 思路二：循环一次，存储好子串的个数
// 这样比较比较快捷，不需要每次调用子函数进行比较，不需要使用 slice 函数截取字符串，这样大量节省时间
// 88 ms, 在所有 JavaScript 提交中击败了62.93%
var countGoodSubstrings2 = function(s) {
  const len = s.length;
  // if length is 1 or 2, the result is 0
  if (len <= 2) {
    return 0;
  }
  // 辅助函数，判断是否是好的子字符串
  let isGood = function(i, j, k) {
    if (!i || !j || !k) {
      return false;
    }
    if (i !== j && j !== k && i !== k) {
      return true;
    }
    return false;
  };
  let res = 0;
  for (let i = 0; i < len; i++) {
    if (isGood(s[i], s[i + 1], s[i + 2])) {
      res += 1;
    }
  }
  return res;
};

// console.log(countGoodSubstrings2('xyzzaz') === 1);
// console.log(countGoodSubstrings2('aababcabc') === 4);

export { countGoodSubstrings1, countGoodSubstrings2 };
