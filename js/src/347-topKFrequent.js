/*
 * [347] 前 K 个高频元素
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 思路：第一次循环，获取不同数字出现的频率，这是必须的N
// 然后遍历哈希表的值,设置一个数组存储
// 遍历过程中，获取最大的几个值（然后依次比较第三个元素），最后输出结果即可
// 92 ms, 在所有 JavaScript 提交中击败了86.41%
function topKFrequent(nums, k) {
  const len = nums.length;
  if (len === k) {
    return nums;
  }
  const hashMap = {};
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (hashMap[item]) {
      hashMap[item]++;
    } else {
      hashMap[item] = 1;
    }
  }
  // 获取哈希表，遍历哈希表的值
  const target = [];
  for (const key in hashMap) {
    if (Object.prototype.hasOwnProperty.call(hashMap, key)) {
      const value = hashMap[key];
      target.push(value);
    }
  }
  target.sort((a, b) => b - a);
  const res = target.slice(0, k);
  // 这里是结果数组的次数，再次反向遍历哈希表试一下
  const result = [];
  for (const key in hashMap) {
    if (Object.prototype.hasOwnProperty.call(hashMap, key)) {
      const value = hashMap[key];
      if (res.includes(value)) {
        result.push(key);
      }
    }
  }
  return result;
}

// todo: 算法待优化
// 这里存放最大的目标值
// 前K个直接放在数组中
// let targetArr = new Array(k);
// if (target.length < k) {
//   target.push(value);
// }
// else if (target.length === k) {
//   if (noSort) {
//     target.sort((a, b) => a - b);
//     console.log(target);
//   }
//   if (target[target.length - 1])
// }

export { topKFrequent };
