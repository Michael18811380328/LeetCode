// 26 排序数组去重
// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
// 你不需要考虑数组中超出新长度后面的元素。

// 方法一：循环一次，删除重复元素
// 100 ms, 在所有 javascript 提交中击败了 71.42%
function removeDuplicates1(nums) {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}

// 方法二：快慢指针
// 96 ms 在所有 JavaScript 提交中击败了83.05%
// 40.1 MB 在所有 JavaScript 提交中击败了11.37%
function removeDuplicates2(nums) {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  let slow = 0;
  for (let fast = 0; fast < len; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}

export { removeDuplicates1, removeDuplicates2 };
