/*
 * @lc app=leetcode.cn id=1016 lang=javascript
 *
 * [1016] 子串能表示从 1 到 N 数字的二进制串
 */

// @lc code=start

// 思路一：因为数字是1亿，最差情况可以循环一次
// 然后转换成每一个子串，看字符串是否满足，这个性能不好
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
// (64 ms) Your runtime beats 94.44 % of javascript submissions
const queryString = function(s, n) {
  for (let i = 1; i <= n; i++) {
    const current = i.toString(2);
    if (!s.includes(current)) return false;
  }
  return true;
};

// console.log(queryString('1', 1) === true);
// console.log(queryString('0110', 3) === true);
// console.log(queryString('0110', 4) === false);

// 思路二：
// 把这个S的全部子串拿出来，然后转换成数字，看最后能否覆盖0~N的情况
// S的长度小于1000，这个循环就是 1000 * 1000 这个计算较差
// Your runtime beats 5.56 % of javascript submissions
const queryString = function(s, n) {
  const dict = {};
  for (let len = 1; len <= s.length; len++) {
    for (let start = 0; start <= s.length - len; start++) {
      const currStr = s.slice(start, start + len);
      const num = parseInt(currStr, 2);
      if (!dict[num]) {
        dict[num] = true;
      }
    }
  }
  const keyLen = Object.keys(dict).length;
  if (keyLen < n) return false;
  const res = [...Object.keys(dict)].sort((a, b) => a - b > 0);
  // handle all is 1
  if (res[0] !== '0') {
    res.unshift('0');
  }
  for (let i = 1; i <= n; i++) {
    if (res[i] != i) {
      return false;
    }
  }
  return true;
};

// @lc code=end
