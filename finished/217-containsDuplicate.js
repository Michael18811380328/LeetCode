// 217 判断数组中是否有重复元素
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
// 数组去重后，如果长度和原来的不一样，那么就是重复的元素

// 思路一：数组去重后，比较前后的长度是否相同。
// 112 ms, 在所有 javascript 提交中击败了 41.17%
function containsDuplicate(nums) {
  const len = nums.length;
  if (len <= 1) {
    return false;
  }
  const newArr = [...new Set(nums)];
  return newArr.length !== len;
};

// 思路二，遍历后获取重复元素，这样会省时间
// 88 ms, 在所有 javascript 提交中击败了67.96%
function containsDuplicate2(nums) {
  const obj = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const item = nums[i]
    if (!obj[item]) {
      obj[item] = true;
    } else {
      return true;
    }
  }
  return false;
};

export { containsDuplicate, containsDuplicate2 };