/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 * 字符串和数组排序，简单
 */
const customSortString = function(order, s) {
  const dict = {};
  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i + 1;
  }
  let remain = '';
  let arr = '';
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]]) {
      arr = arr + s[i];
    } else {
      remain = remain + s[i];
    }
  }
  arr = arr.split('').sort((a, b) => dict[a] > dict[b] ? 1 : -1);
  return arr.join('') + remain;
};

// 改进版，时间复杂度稍微好一点，减少了数组操作
// var customSortString = function(order, s) {
//     const dict = {};
//     for (let i = 0; i < order.length; i++) {
//         dict[order[i]] = i + 1;
//     }
//     let remain = '';
//     let arr = '';
//     for (let i = 0; i < s.length; i++) {
//         if (dict[s[i]]) {
//             arr = arr + s[i];
//         } else {
//             remain = remain + s[i]
//         }
//     }
//     arr = arr.split('').sort((a, b) => dict[a] > dict[b] ? 1 : -1);
//     return arr.join('') + remain;
//   };

export { customSortString };
