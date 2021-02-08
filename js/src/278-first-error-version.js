// 获取第一个错误的版本，需要调用API
// 二分查找即可
// 辅助函数，判断是否是坏版本
function isBadVersion(num) {
  return num >= 100;
}

/**
 * @param {integer} n Total versions
 * @return {integer} The first bad version
 */
// 52 ms, 在所有 javascript 提交中击败了98.07%
function solution(n) {
  if (n === 1) return n;
  let start = 0;
  let end = n;
  let middle = Math.ceil((start + end) / 2);
  while (start < end - 1) {
    if (isBadVersion(middle)) {
      end = middle;
    } else {
      start = middle;
    }
    middle = Math.ceil((start + end) / 2);
  }
  return middle;
}

export { solution };
