/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路一：获取0的个数，然后末尾统一增加一个0
// 性能不好，击败了30%
function moveZeroes(nums) {
  let number = 0;
  for (let i = 0; i < nums.length;) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      number++;
    } else {
      i++;
    }
  }
  const arr = new Array(number);
  arr.fill(0);
  nums.push(...arr);
}

// 思路二：删除时就增加，不需要额外空间
// 84 ms, 在所有 javascript 提交中击败了40.02%
function moveZeroes2(nums) {
  let number = 0;
  const len = nums.length;
  for (let i = 0; i < len;) {
    if (i > len - number) {
      return;
    }
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      number++;
    } else {
      i++;
    }
  }
}

export { moveZeroes, moveZeroes2 };
