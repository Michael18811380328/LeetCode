/*
 * @lc app=leetcode.cn id=1957 lang=javascript
 *
 * [1957] 删除字符使字符串变好
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 这个字符串较长，可以尝试两个思路
// 思路1：循环一次字符串，然后去掉重复的元素
// Your runtime beats 97.33 % of javascript submissions
var makeFancyString = function(s) {
  const len = s.length;
  if (len <= 2) return s;
  let res = '' + s[0] + s[1];
  for (let i = 2; i < len; i++) {
    if (s[i] === s[i - 2] && s[i] === s[i - 1]) {
      continue;
    }
    res += s[i];
  }
  return res;
};

// 思路二：正则
// 适合字符串较长的情况，字符较短时性能比较差
// 还能都直接循环26个字母，先判断有没有这个字符，然后使用正则替换处理
// for (var i = 0; i < 26; i++) {
//   console.log(String.fromCharCode((97 + i)));
// }
// 'asaaaaaa'.replace(/([a-z])\1{2}/g, 'a');
var makeFancyString = function(s) {
  const len = s.length;
  if (len <= 2) return s;
  
};


// @lc code=end

