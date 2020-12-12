/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (k <= 0) {
    return num;
  }
  if (num.length === k) {
    return '0';
  }
  let res = num;
  while (k > 0) {
    res = getMin(res);
      console.log(res);
    if (res === '0') {
      return res;
    }
    k--;
  }
  return res;
};

// 这个函数计算有问题
var getMin = function(str) {
  if (str.length < 2) return '0';
  if (str[1] === '0') {
    let min = str.slice(2);
    min = min.replace(/\b(0+)/gi, "");
    return min;
  } else {
    let flag = 0;
    let current = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] > current) {
        flag = i;
        current = str[i];
      } else {
        let min = str.slice(0, flag - 1) + str.slice(flag, str.length);
        return min;
      }
    }
  }
  let min = str.slice(0, flag - 1) + str.slice(flag, str.length);
  return min;
}

// @lc code=end

