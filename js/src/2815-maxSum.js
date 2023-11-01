/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSum = function(nums) {
  // 基本思路：
  const dict = {};
  let max = -1;
  // 辅助函数：获取某个数位最大的值
  function getMax(num) {
    let result = num % 10;
    num = (num - num % 10) / 10;
    while (num > 0) {
      const curr = num % 10;
      result = curr > result ? curr : result;
      num = (num - num % 10) / 10;
    }
    return result;
  }
  // 第一次循环数组，把数字和对应的最大位数拿到，然后写入哈希表中
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    dict[item] = getMax(item);
  }
  // 第二次直接循环两次数组，找到每一个数对，然后看最大是否满足，满足的话求和
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (dict[nums[i]] === dict[nums[j]]) {
        const currMax = nums[i] + nums[j];
        if (currMax > max) {
          max = currMax;
        }
      }
    }
  }
  return max;
};

export { maxSum };
