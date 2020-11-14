/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let resultArr = [];
  const len = nums.length;
  // 把数组先排序
  nums.sort((a, b) => a - b);
  // console.log(nums);
  for (let i = 0; i < len; i++) {
    // 当前的值是 current，那么剩下两个值的和应该是 -current;
    let current = nums[i];
    let target = current * -1;
    let hash = {};
    // console.log(current, target);
    for (let j = i + 1; j < len; j++) {
      const item = nums[j];
      if (hash[item] > -1) {
        let result = [nums[i], nums[j], nums[hash[item]]];
        resultArr.push(result);
      }
      hash[target - item] = j;
    }
  }
  // 现在的结果有重复
  // [[-1,1,0],[-1,2,-1],[-1,1,0]]
  // 最后结果数组去重
  let tmp = [];
  resultArr.forEach(item => {
    let str = item.join(',');
    tmp.push(str);
  });
  tmp = [...new Set(tmp)];
  let res = [];
  tmp.forEach(item => {
    let arr = item.split(',');
    res.push(arr);
  });
  // [ -4, -1, -1, 0, 1, 2 ]
  return res;
};
// @lc code=end

// 现在这种方法超出时间限制（数组长度是1000，那么两层循环性能不好）