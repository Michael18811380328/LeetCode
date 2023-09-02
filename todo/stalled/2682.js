/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
// 5 3 [235] [23]
var circularGameLosers = function(n, k) {
  let dict = {};
  dict[1] = true;
  let tmp = 1;
  for (let i = 1; i < 100; i++) {
      // 主要是这里 
      tmp = (tmp + i * k) > n ? (tmp + i * k) % n : (tmp + i * k);
      if (dict[tmp]) {
          break;
      } else {
          dict[tmp] = true;
      }
  }
  let result = [];
  for (let i = 1; i <= n; i++) {
      if (!dict[i]) {
          result.push(i);
      }
  }
  return result;
};
