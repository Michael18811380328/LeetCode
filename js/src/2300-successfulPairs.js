/*
 * @lc app=leetcode.cn id=2300 lang=javascript
 * [2300] 咒语和药水的成功对数
 * https://leetcode.cn/problems/successful-pairs-of-spells-and-potions/
 */
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// 思路一：两重循环，中间判断终止条件，性能比较差
// 9856 ms, 在所有 JavaScript 提交中击败了5.17%
const successfulPairs2 = function(spells, potions, success) {
  potions = potions.filter((posion) => {
    return posion > 0;
  }).sort((a, b) => {
    return a < b ? 1 : -1;
  });
  const dict = {};
  return spells.map((spell) => {
    if (spell === 0) return 0;
    let res = 0;
    if (dict[spell] || dict[spell] === 0) {
      return dict[spell];
    }
    const tmp = success / spell;
    for (let i = 0; i < potions.length; i++) {
      if (potions[i] >= tmp) {
        res++;
      } else {
        break;
      }
    }
    dict[spell] = res;
    return res;
  });
};

// 思路2：二分数组判断
// 336 ms, 在所有 JavaScript 提交中击败了20.69%
// 这个时间基本满足
const successfulPairs = function(spells, potions, success) {
  potions = potions.filter((posion) => {
    return posion > 0;
  }).sort((a, b) => {
    return a < b ? 1 : -1;
  });
  const len = potions.length;
  const dict = {};
  return spells.map((spell) => {
    if (spell === 0) return 0;
    if (dict[spell] || dict[spell] === 0) {
      return dict[spell];
    }
    const tmp = success / spell;
    if (potions[0] < tmp) {
      return 0;
    }
    if (potions[potions.length - 1] > tmp) {
      return len;
    }
    // 二分法（还有提升空间）
    let start = 0;
    let end = len - 1;
    let mid = Math.floor((start + end) / 2);
    while (potions[mid] !== tmp) {
      if (potions[mid] >= tmp && potions[mid + 1] < tmp) {
        return mid + 1;
      }
      if (potions[mid] < tmp) {
        end = mid;
        mid = Math.floor((start + end) / 2);
      }
      if (potions[mid] >= tmp) {
        start = mid;
        mid = Math.floor((start + end) / 2);
      }
      if (potions[start] === tmp) {
        return potions.lastIndexOf(potions[start]) + 1;
      }
      if (potions[end] === tmp) {
        return potions.lastIndexOf(potions[end]) + 1;
      }
    }
    return potions.lastIndexOf(potions[mid]) + 1;
  });
};

export { successfulPairs, successfulPairs2 };

// console.log(successfulPairs([5,1,3], [1,2,3,4,5], 7), [4,0,3])
// console.log(successfulPairs([3,1,2], [8,5,8], 16), [2,0,2])
// console.log(successfulPairs([3,1,2,0,3,3,4,4], [8,5,8], 16), [2,0,2,0,2,2,2,2])
// console.log(successfulPairs([4], [8,5,8], 16), [3])
// console.log(successfulPairs(
//   [36,36,22,11,35,21,4,25,30,35,31,10,8,39,7,22,18,9,23,30,9,37,22,7,36,40,17,37,38,27,6,15,1,15,7,31,36,29,9,15,3,37,15,17,25,35,9,21,5,17,25,8,18,25,7,19,4,33,9,5,29,13,9,18,5,10,31,6,7,24,13,11,8,19,2],
//   [30,11,5,20,19,36,39,24,20,37,33,22,32,28,36,24,40,27,36,37,38,23,39,11,40,19,37,32,25,29,28,37,31,36,32,40,38,22,17,38,20,33,29,17,36,33,35,25,28,18,17,19,40,27,40,28,40,40,40,39,17,34,36,11,22,29,22,35,35,22,18,34],
//   135
// ), [72,72,71,68,72,71,29,71,72,72,72,68,68,72,59,71,71,68,71,72,68,72,71,59,72,72,71,72,72,72,51,71,0,71,59,72,72,72,68,71,0,72,71,71,71,72,68,71,46,71,71,68,71,71,59,71,29,72,68,46,72,71,68,71,46,68,72,51,59,71,71,68,68,71,0]);
