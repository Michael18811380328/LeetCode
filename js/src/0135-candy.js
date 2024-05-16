/**
 * @param {number[]} ratings
 * @return {number}
 */
// https://leetcode.cn/problems/candy/?envType=study-plan-v2&envId=top-interview-150
// 这个题目使用贪心算法，需要同时满足左右的结果都贪心，短期自己没想出来，参考的别人思路
// 参考思路：https://leetcode.cn/problems/candy/solutions/854965/dai-ma-sui-xiang-lu-135-fen-fa-tang-guo-f7ezy/?envType=study-plan-v2&envId=top-interview-150
// 这个解答的核心：
// 1 不能同时考虑左侧的贪心和右侧的贪心，应该分开谈论，如果同时谈论左侧的贪心和右侧的贪心，可能结果不正确（这个需要想清楚）
// 2 第一次从左向右比较，第二次从右向左比较，这样就能用上之前的比较结果
// 贪心算法：局部最优可以推出全局最优
const candy = function(ratings) {
  const result = Array(ratings.length).fill(1);
  // 从左向右遍历
  for (let i = 1; i < result.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      result[i] = result[i - 1] + 1;
    }
  }
  // 从右向左遍历（技巧点）
  for (let i = result.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      result[i] = Math.max(result[i], result[i + 1] + 1);
    }
  }
  // 计算结果
  return result.reduce((a, b) => a + b, 0);
};

// console.log(candy([1, 0, 2]) === 5);

export { candy };

// const candy = function(rating) {
//   let result = Array(rating.length).fill(1);
//   for (let i = 1; i < result.length; i++) {
//     if (rating[i] > rating[i - 1]) {
//       result[i] = result[i - 1] + 1;
//     }
//   }
//   for (let i = result.length - 2; i >= 0; i--) {
//     if (rating[i] > rating[i + 1]) {
//       result[i] = Math.max(result[i], result[i + 1] + 1);
//     }
//   }
//   return result.reduce((a, b) => a + b, 0);
// }
