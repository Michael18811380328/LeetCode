/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 划分数组为连续数字的集合
 * 给你一个整数数组 nums 和一个正整数 k，请你判断是否可以把这个数组划分成一些由 k 个连续数字组成的集合。
 * 如果可以，请返回 true；否则，返回 false。
 * https://leetcode.cn/problems/divide-array-in-sets-of-k-consecutive-numbers/
 */
const isPossibleDivide = function(nums, k) {
  if (k === 1) return true;
  const len = nums.length;
  // 数组长度不是 K 的倍数，那么不满足
  if (len % k !== 0) return false;
  // 把数组遍历一次，转换成对象存储
  const dict = {};
  for (let i = 0; i < len; i++) {
    if (!dict[nums[i]]) {
      dict[nums[i]] = 1;
    } else {
      dict[nums[i]] = dict[nums[i]] + 1;
    }
  }
  // 把对象的键拿出来作为数组，遍历这个数组（没有重复值）这里最差的复杂度是N^2，数组的长度是1万，时间可以接受
  const list = [...Object.keys(dict)];
  // 从最小的开始，然后获取次数，减去对象中出现的次数
  // 循环上面的操作，直接最后结果是0
  for (let i = 0; i < list.length; i++) {
    const curr = list[i];
    const number = dict[curr];
    if (number === 0) continue;
    dict[curr] = 0;
    for (let j = 1; j < k; j++) {
      const tmp = Number(curr) + j;
      // 如果某一次的次数小于N，那么不满足
      if (dict[tmp] < number || dict[tmp] === 0 || !dict[tmp]) {
        return false;
      }
      dict[tmp] = dict[tmp] - number;
    }
  }
  return true;
};

// // true
// console.log(isPossibleDivide([1, 2, 3, 3, 4, 4, 5, 6], 4));
// console.log(isPossibleDivide([3, 2, 1, 2, 3, 4, 3, 4, 5, 9, 10, 11], 3));
// console.log(isPossibleDivide([3, 3, 2, 2, 1, 1], 3));
// // false
// console.log(isPossibleDivide([1, 2, 3, 4], 3));
// console.log(isPossibleDivide([1, 2, 3, 5, 8, 9], 3));

export { isPossibleDivide };
