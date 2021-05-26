/**
 * @param {number[][]} logs
 * @return {number}
 */
// 80 ms, 在所有 JavaScript 提交中击败了93.45%
var maximumPopulation = function(logs) {
  // 思路：使用桶排序，这样的性能不太好，可以解决出来
  // 记得之前做过类似区间数组的问题，但是方法记不清楚了
  let arr = [];
  // 1950 <= birthi < deathi <= 2050
  for (let i = 0; i <= 2050; i++) {
    arr[i] = 0;
  }
  for (let i = 0; i < logs.length; i++) {
    const curr = logs[i];
    const start = curr[0];
    const end = curr[1];
    for (let j = start; j < end; j++) {
      // console.log(j);
      arr[j] = arr[j] + 1;
      // console.log(arr[j]);
    }
  }
  // console.log(arr.slice(1950));
  const max = Math.max(...arr);
  // console.log(max);
  for (let i = 1950; i <= 2050; i++) {
    if (arr[i] === max) {
      return i;
    }
  }
};

// console.log(maximumPopulation([[1993,1994]]));
// console.log(maximumPopulation([[1993,1999],[2000,2010]]));
// console.log(maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]));
// console.log(maximumPopulation([[2008,2026],[2004,2008],[2034,2035],[1999,2050],[2049,2050],[2011,2035],[1966,2033],[2044,2049]]));

