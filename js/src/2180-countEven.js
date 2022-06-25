/*
 * @lc app=leetcode.cn id=2180 lang=javascript
 *
 * [2180] 统计各位数字之和为偶数的整数个数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
const countEven = function(num) {
  // 72 ms, 在所有 JavaScript 提交中击败了25.35%
  // 辅助函数：判断一个数是否满足各位数字之和为偶数
  const check = (n) => {
    const s = String(n);
    let res = 0;
    res += Number(s[0]);
    if (s[1]) {
      res += Number(s[1]);
    }
    if (s[2]) {
      res += Number(s[2]);
    }
    if (s[3]) {
      res += Number(s[3]);
    }
    return res % 2 === 0;
  };

  let tmp = 0;
  for (let i = 1; i <= num; i++) {
    if (check(i)) {
      tmp++;
    }
  }
  return tmp;
};
// @lc code=end

export { countEven };
