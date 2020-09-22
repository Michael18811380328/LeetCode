// 189 旋转数组
// 要求：原地旋转数组，时间复杂度1，三种方法以上解答

// 方法1：使用数组的 pop unshift 104ms 60%
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate1(nums, k) {
  for (let i = 0; i < k; i++) {
    const item = nums.pop();
    nums.unshift(item);
  }
}
// 方法2：使用数组的 80ms, 94%
function rotate2(nums, k) {
  const len = nums.length;
  if (len === 1 || k === 0) return;
  const times = len - (k % len);
  // 首先对 K 取余数，这样避免了多出的循环。如果k小于数组长度会加大计算量。
  for (let i = 0; i < times; i++) {
    const item = nums.shift();
    nums.push(item);
  }
}
// 方法3：不使用循环，直接使用数组的splice删除插入一部分内容 84ms 90%
function rotate(nums, k) {
  const len = nums.length;
  if (len === 1 || k === 0) return;
  const times = k % len;
  const tailArray = nums.splice(-times, times);
  nums.unshift(...tailArray);
}

export { rotate, rotate1, rotate2 };
