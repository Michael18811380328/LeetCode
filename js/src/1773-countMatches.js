/*
 * @lc app=leetcode.cn id=1773 lang=javascript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
//  Your runtime beats 9.73 % of javascript submissions
const countMatches = function(items, ruleKey, ruleValue) {
  // 首先获取需要检索的项
  let index;
  if (ruleKey === 'type') {
    index = 0;
  } else if (ruleKey === 'color') {
    index = 1;
  } else if (ruleKey === 'name') {
    index = 2;
  }
  // 然后遍历一次，记录即可
  let number = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item[index] === ruleValue) {
      number++;
    }
  }
  return number;
};
// @lc code=end
