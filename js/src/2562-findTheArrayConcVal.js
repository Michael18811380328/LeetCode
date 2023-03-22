/**
 * @param {number[]} nums
 * @return {number}
 * 双指针遍历数组
 */
const findTheArrayConcVal = function(nums) {
  let result = 0;
  const end = Math.ceil(nums.length / 2);
  for (let i = 0; i < end; i++) {
    if (i !== nums.length - 1 - i) {
      result += Number(String(nums[i]) + String(nums[nums.length - 1 - i]));
    } else {
      result += nums[i];
    }
  }
  return result;
};

// console.log(findTheArrayConcVal([7,52,2,4])); // 596
// console.log(findTheArrayConcVal([5,14,13,8,12])); // 673

export { findTheArrayConcVal };
