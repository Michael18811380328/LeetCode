/**
 * @param {string} num
 * @return {string}
 */
// 给定一个字符串，获取最大的奇数子串
// 只要是最后一个是奇数，就是最大的奇数子串
// 考察字符串算法和循环，简单
const largestOddNumber = function(num) {
  let res = num;
  while (res.length > 0) {
    const last = res[res.length - 1];
    if (last % 2 === 1) {
      return res;
    } else {
      res = res.slice(0, res.length - 1);
    }
  }
  return '';
};

export { largestOddNumber };
