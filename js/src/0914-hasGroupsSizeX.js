/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
// Your runtime beats 58.8 % of javascript submissions
// 辅助函数：求最大公约数
function gcd(a, b) {
  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

const hasGroupsSizeX = function(deck) {
  const len = deck.length;
  if (len < 2) return false;
  // 获取不同元素出现的次数
  const dict = {};
  for (let i = 0; i < len; i++) {
    const key = deck[i];
    if (!dict[key]) {
      dict[key] = 0;
    }
    dict[key]++;
  }
  const arr = [];
  for (const key in dict) {
    // 如果某个数字只出现一次，那么一定不存在最大公约数
    if (dict[key] === 1) {
      return false;
    }
    arr.push(dict[key]);
  }
  // 排序，然后依次求最大公约数
  arr.sort((a, b) => a - b);
  if (!arr[1]) return true;
  let res = gcd(arr[0], arr[1]);
  // console.log(arr);
  if (res === 1) return false;
  for (let i = 1; i < arr.length; i++) {
    res = gcd(res, arr[i]);
    // console.log(res, arr[i], res);
    if (res === 1) return false;
  }
  return true;
};

// [1,1]
// @lc code=end

export { hasGroupsSizeX };
