/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 找出 3 位偶数
// 时间复杂度是O^3，这个数据量级下可以接受
// Your runtime beats 38.23 % of javascript submissions
// 优化后：Your runtime beats 42.65 % of javascript
const findEvenNumbers = function(digits) {
  const len = digits.length;
  // 1 数组的长度100，那么可以使用三层循环，获取这个三位数
  let arr = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (i !== j && j !== k && k !== i) {
          const current = digits[i] * 100 + digits[j] * 10 + digits[k];
          if (current >= 100 && current % 2 === 0) {
            arr.push(current);
          }
        }
      }
    }
  }
  // 2 然后结果数组中把不满足的情况过滤即可
  // 2.1 去重
  // arr = [...new Set(arr)];
  // 2.2 去掉前导0（小于100的情况）必须是偶数
  // todo：这里可以优化，满足条件才放入目标数组
  // arr = arr.filter(item => {
  //   return item >= 100 && item % 2 === 0;
  // });
  // 2.3 排序
  arr = [...new Set(arr)].sort((a, b) => {
    return a - b > 0 ? 1 : -1;
  });
  return arr;
};

export { findEvenNumbers };
