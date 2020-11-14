/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 820 ms
// , 在所有 JavaScript 提交中击败了
// 5.09%
// 的用户
var threeSum = function(nums) {
  let resultArr = [];
  const len = nums.length;
  // 把数组先排序
  nums.sort((a, b) => a - b);
  // 排序后，如果第一个元素大于0，或者最后一个元素小于0，那么无解，返回空数组
  if (nums[0] > 0 || nums[len - 1] < 0) {
    return []
  }
  // console.log(nums);
  let hash = {};
  for (let i = 0; i < len; i++) {
    // 当前的值是 current，那么剩下两个值的和应该是 -current;
    let current = nums[i];
    let target = current * -1;
    // let hash = {};
    // 使用双指针实现
    let start = i + 1;
    let end = len - 1;
    while (start < end) {
      if (nums[start] + nums[end] === target) {
        let hs = [nums[i], nums[start], nums[end]];
        // 因为现在已经是排序的，写一个哈希表，避免重复数据
        let key = `${nums[i]}+${nums[start]}+${nums[end]}`;
        if (!hash[key]) {
          resultArr.push(hs);
          hash[key] = true;
        }
        start++;
        // 这里性能不好，处理重复数据会消耗大量时间[00000000]
      }
      else if (nums[start] + nums[end] < target) {
        start++;
      }
      else if (nums[start] + nums[end] > target) {
        end--;
      }
    }
  }
  return resultArr;
};