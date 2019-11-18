// 219 判断数组中是否有重复元素
// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j
// 使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

// 同样的代码，第一个是WiFi（网速慢），第二个是4G网速快，执行效果完全不同。
// 108 ms, 在所有 javascript 提交中击败了47.89%
// 76 ms, 在所有 javascript 提交中击败了86.32%
function containsNearbyDuplicate(nums, k) {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i];
    if (obj[item] === undefined) {
      obj[item] = i;
    } else {
      if (i - obj[item] <= k) {
        return true;
      }
      obj[item] = i;
    }
  }
  return false;
};

export { containsNearbyDuplicate };
