/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
// 观察题目可以发现：如果颜色相同的兔子，那么报数应该是一样的
// 报数不同的兔子，颜色肯定不一样
// 首先获取不同报数的兔子的数量，然后求商，再向上取整即可
// Your memory usage beats 55.32 %
const numRabbits = function(answers) {
  // 处理特殊情况
  const len = answers.length;
  if (len === 0) return len;
  // 计算不同报数的兔子的数量
  const dict = {};
  for (let i = 0; i < len; i++) {
    const curr = answers[i];
    if (!dict[curr]) {
      dict[curr] = 1;
    } else {
      dict[curr]++;
    }
  }
  // 然后遍历数组，计算不同报数的情况
  let result = 0;
  // eslint-disable-next-line guard-for-in
  for (const key in dict) {
    const value = dict[key];
    const time = Number(key);
    result += (time + 1) * Math.ceil(value / (time + 1));
  }
  return result;
};

// console.log(numRabbits([1, 1, 2]) === 5)
// console.log(numRabbits([2, 2, 2, 2, 2, 2, 2]) === 9)
// console.log(numRabbits([10, 10, 10]) === 11)
// @lc code=end
export { numRabbits };
