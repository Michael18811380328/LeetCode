/*
 * @lc app=leetcode.cn id=2300 lang=javascript
 *
 * [2300] 咒语和药水的成功对数
 */

// @lc code=start
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  // 过滤其中的0
  potions = potions.filter(posion => {
    return posion > 0
  });
  // 这个可以排序，然后计算到某一个，就不需要再次计算了，这样就减少循环层级（或者使用二分法找到中间的值）
  let dict = {};
  return spells.map(spell => {
    // 如果是0，那么结果一定时0，不需要继续循环
    if (spell === 0) return 0;
    let res = 0;
    // 先从缓存中读取结果
    if (dict[spell] || dict[spell] === 0) {
      return dict[spell];
    }
    let tmp = success / spell;
    // TODO: 这里直接使用二分法找到满足条件的值，时间复杂度变成 n * logN
    potions.forEach(posion => {
      if (posion >= tmp) {
        res++;
      }
    });
    dict[spell] = res;
    return res;
  });
};
// @lc code=end

