// 80 排序数组去重
// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 80ms 36.1MB 中位数
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const len = nums.length;
  if (len < 2) {
    return len;
  }
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] === nums[i - 2]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}

export { removeDuplicates };
