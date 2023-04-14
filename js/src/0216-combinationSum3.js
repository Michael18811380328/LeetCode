/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
// Your runtime beats 92.05 % of javascript submissions
const combinationSum3 = function(k, n) {
  const list = [];
  const tmp = [];
  const backTrack = function(tmp, list) {
    // 如果和已经超过N，直接返回
    if (tmp.length > k) {
      return;
    }
    // 如果长度是K，那么判断和是否是N
    if (tmp.length === k) {
      const sum = tmp.reduce((a, b) => a + b, 0);
      if (sum === n) {
        list.push([...tmp]);
      }
      return;
    }
    // 如果长度小于K，而且和没有超过N，那么继续回溯
    const start = tmp[tmp.length - 1] || 0;
    for (let i = start + 1; i < 10; i++) {
      tmp.push(i);
      backTrack(tmp, list);
      tmp.pop();
    }
  };
  backTrack(tmp, list);
  return list;
};

// @lc code=end

export { combinationSum3 };
