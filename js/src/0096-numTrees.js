/**
 * @param {number} n
 * @return {number}
 */
// [96] 不同的二叉搜索树
// 思路1
// 难点：动态规划公式，详见文档
// Your runtime beats 71.57 % of javascript submissions
const numTrees = function(n) {
  if (n <= 1) return 1;
  const arr = new Array(n + 1);
  arr[0] = 1;
  arr[1] = 1;
  // 外循环：动态规划计算每一项
  for (let i = 2; i <= n; i++) {
    arr[i] = 0;
    // 内循环：当前项的递归公式
    for (let j = 1; j <= i; j++) {
      arr[i] += arr[i - j] * arr[j - 1];
    }
  }
  return arr[n];
};

// 思路2
// 难点：数学卡特兰数，详见文档
// Your runtime beats 51.04 % of javascript submissions
const numTrees2 = function(n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res = res * 2 * (2 * i + 1) / (i + 2);
  }
  return res;
};

export { numTrees, numTrees2 };
