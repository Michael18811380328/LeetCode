/**
 * [2264] 字符串中最大的 3 位相同数字
 * @lc app=leetcode.cn id=2264 lang=javascript
 * @param {string} num
 * @return {string}
 */
const largestGoodInteger = function(num) {
  let tmp = '';
  for (let i = 2; i < num.length; i++) {
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      if (!tmp || Number(num[i]) > Number(tmp)) {
        tmp = num[i];
      }
    }
  }
  if (tmp === '') return '';
  return tmp + tmp + tmp;
};

export { largestGoodInteger };
