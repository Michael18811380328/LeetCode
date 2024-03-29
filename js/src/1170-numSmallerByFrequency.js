/*
 * @lc app=leetcode.cn id=1170 lang=javascript
 *
 * [1170] 比较字符串最小字母出现频次
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
// 152 ms, 在所有 JavaScript 提交中击败了59.09%
const numSmallerByFrequency = function(queries, words) {
  // 辅助函数
  const getNumber = (strs) => {
    const arr = strs.split('');
    arr.sort((a, b) => {
      return a > b ? 1 : -1;
    });
    const current = arr[0];
    let index = 1;
    while (current === arr[index]) {
      index++;
    }
    return index;
  };

  // 先把两个数组的字符串转换成函数结果，并排序
  // 然后使用双指针，获取结果
  const a = []; const
    b = [];
  queries.forEach((item, index) => {
    const times = getNumber(item);
    a[index] = times;
  });
  words.forEach((item, index) => {
    const times = getNumber(item);
    b[index] = times;
  });
  // 现在这种方法可行，但是很不好；
  // 改进的方法：把B排序后，然后节省一部分时间
  const res = [];
  for (let i = 0; i < a.length; i++) {
    let times = 0;
    for (let j = 0; j < b.length; j++) {
      if (b[j] > a[i]) {
        times++;
      }
    }
    res[i] = times;
  }
  return res;
};
// @lc code=end

export { numSmallerByFrequency };
