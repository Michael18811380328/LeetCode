// 1346. 检查整数及其两倍数是否存在
// 给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。
// 更正式地，检查是否存在两个下标 i 和 j 满足：
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// 示例 1：
// 输入：arr = [10,2,5,3]
// 输出：true
// 解释：N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。
/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function(arr) {
  // 哈希表存储
  const len = arr.length;
  if (len < 2) return false;
  const hash = {};
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    const a = item * 2;
    const b = item / 2;
    if (hash[a] || hash[b]) return true;
    // 把当前的存入hash 中
    hash[item] = true;
  }
  return false;
};

export { checkIfExist };
