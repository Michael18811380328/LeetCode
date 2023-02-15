/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路一：数组长度小于1000，那么可以暴力三层循环 时间复杂度是 N * N * N
// 2204 ms, 在所有 JavaScript 提交中击败了5.53%
const triangleNumber = function(nums) {
  const len = nums.length;
  if (len < 3) return 0;
  nums = nums.sort((a, b) => a > b ? 1 : -1);
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] > nums[k]) {
          result++;
        }
      }
    }
  }
  return result;
};

// 思路2：外层循环ij，数组已经排序，内部 break 优化一半，时间复杂度是 N * N * N / 2
// 1196 ms, 在所有 JavaScript 提交中击败了20.28%
const triangleNumber2 = function(nums) {
  const len = nums.length;
  if (len < 3) return 0;
  nums = nums.sort((a, b) => a > b ? 1 : -1);
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] > nums[k]) {
          result++;
        } else {
          break;
        }
      }
    }
  }
  return result;
};

// 思路3：外层循环 i j 内部实现二分法查找，时间复杂度是 N * N * logN
// 468 ms, 在所有 JavaScript 提交中击败了34.10%
const triangleNumber3 = function(nums) {
  const len = nums.length;
  if (len < 3) return 0;
  nums.sort((a, b) => a > b ? 1 : -1);
  let result = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const target = nums[i] + nums[j];
      let left = j + 1;
      let right = len - 1;
      let k = j;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
          k = mid;
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      result += k - j;
    }
  }
  return result;
};

export { triangleNumber, triangleNumber2, triangleNumber3 };
