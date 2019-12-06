// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 注意:
// 不能使用代码库中的排序函数来解决这道题。

// 示例:

// 输入: [2,0,2,1,1,0]
// 输出: [0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路：只有三个数，那么遍历一次数组，如果遇到0，就放在第一位，如果遇到2，就放在最后一位。
// 记录0和2的个数，然后遍历一次，如果位置在0-2中间的就是1
// 68 ms, 在所有 javascript 提交中击败了64.19%
function sortColors(nums) {
  const len = nums.length;
  if (len === 0 || len === 1) {
    return nums;
  }
  let timer = 0;
  let timer0 = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      timer0++;
      if (i === 0) continue;
      nums.splice(i, 1);
      nums.unshift(0);
      while(nums[i] === 0 && timer0 < i) {
        i--;
      }
      if (timer0 === len) break;
    }
    else if (nums[i] === 2) {
      timer++;
      if (i === len - 1) continue;
      nums.splice(i, 1);
      nums.push(2);
      while((nums[i] === 2 && timer < len - i) || nums[i] === 0) {
        i--;
      }
    }
  }
  return nums;
}

export { sortColors };