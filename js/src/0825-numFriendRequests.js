/*
 * @lc app=leetcode.cn id=825 lang=javascript
 *
 * [825] 适龄的朋友
 */

// @lc code=start
/**
 * @param {number[]} ages
 * @return {number}
 */
// Your runtime beats 7.41 % of javascript submissions
// 现在性能很差 (6908 ms)
// 平均耗时100ms
const numFriendRequests = function(ages) {
  ages.sort((a, b) => a - b);
  const len = ages.length;
  let res = 0;
  // 这里的双循环和排序非常耗时
  // 未来优化这里
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (i === j || ages[i] < ages[j]) continue;
      const isFriend = check(ages[i], ages[j]);
      if (isFriend) res++;
    }
  }
  return res;
};

const check = function(a, b) {
  if (b <= 0.5 * a + 7) {
    return false;
  }
  if (b > 100 && a < 100) {
    return false;
  }
  return true;
};

// @lc code=end
