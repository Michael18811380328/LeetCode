// 27
// 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 方法一：首先使用indexOf过滤不符合的数组 72 ms , 在所有 javascript 提交中击败了 68.56%
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  if (!nums.includes(val)) {
    return nums.length;
  }
  for (let i = 0; i < nums.length;) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums.length;
}

// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// const val = 2;
// let nums = [0, 1, 3, 0, 4, 4], val = 2;s
// console.log(removeElement(nums, val));
// 如果不使用Includes方法判断，76 ms, 在所有 javascript 提交中击败了55.09%
export default removeElement;
