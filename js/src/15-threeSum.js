/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 思路1 超时
// 现在这种方法超出时间限制（数组长度是1000，那么两层循环性能不好）
const threeSumTmp = function (nums) {
  const resultArr = [];
  const len = nums.length;
  // 把数组先排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 当前的值是 current，那么剩下两个值的和应该是 -current;
    const current = nums[i];
    const target = current * -1;
    const hash = {};
    for (let j = i + 1; j < len; j++) {
      const item = nums[j];
      if (hash[item] > -1) {
        const result = [nums[i], nums[j], nums[hash[item]]];
        resultArr.push(result);
      }
      hash[target - item] = j;
    }
  }
  // 现在的结果有重复
  // [[-1,1,0],[-1,2,-1],[-1,1,0]]
  // 最后结果数组去重
  let tmp = [];
  resultArr.forEach((item) => {
    const str = item.join(',');
    tmp.push(str);
  });
  tmp = [...new Set(tmp)];
  const res = [];
  tmp.forEach((item) => {
    const arr = item.split(',');
    res.push(arr);
  });
  // [ -4, -1, -1, 0, 1, 2 ]
  return res;
};

// 思路二：可以实现，性能不好
// 820 ms , 在所有 JavaScript 提交中击败了5.09%的用户
const threeSum = function (nums) {
  const resultArr = [];
  const len = nums.length;
  // 把数组先排序
  nums.sort((a, b) => a - b);
  // 排序后，如果第一个元素大于0，或者最后一个元素小于0，那么无解，返回空数组
  if (nums[0] > 0 || nums[len - 1] < 0) {
    return [];
  }
  const hash = {};
  for (let i = 0; i < len; i++) {
    // 当前的值是 current，那么剩下两个值的和应该是 -current;
    const current = nums[i];
    const target = current * -1;
    // 使用双指针实现
    let start = i + 1;
    let end = len - 1;
    while (start < end) {
      if (nums[start] + nums[end] === target) {
        const hs = [nums[i], nums[start], nums[end]];
        // 因为现在已经是排序的，写一个哈希表，避免重复数据
        const key = `${nums[i]}+${nums[start]}+${nums[end]}`;
        if (!hash[key]) {
          resultArr.push(hs);
          hash[key] = true;
        }
        start++;
        // 这里性能不好，处理重复数据会消耗大量时间[00000000]
      } else if (nums[start] + nums[end] < target) {
        start++;
      } else if (nums[start] + nums[end] > target) {
        end--;
      }
    }
  }
  return resultArr;
};

export { threeSum, threeSumTmp };
