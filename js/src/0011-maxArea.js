// 11
// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，
// 垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。
// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49

// 方法1：两次循环，逐步比较计算最大值
// 两次循环性能不好：1868 ms, 在所有 javascript 提交中击败了5.11%
function maxArea(height) {
  if (height.length === 2) {
    return height[0] > height[1] ? height[1] : height[0];
  }
  let max = 0;
  const { length } = height;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (height[j + 1] && height[j + 1] > height[j]) {
        continue;
      }
      const area = (height[i] > height[j] ? height[j] : height[i]) * (j - i);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
}

// 方法2：双指针逼近最大值
// 84 ms, 在所有 JavaScript 提交中击败了82.20%
// 一次循环实现（算法复杂度满足）
function maxArea2(height) {
  const len = height.length;
  if (len === 2) {
    return Math.min(height[0], height[1]);
  }
  let left = 0;
  let right = len - 1;
  let max = Math.min(height[left], height[right]) * (right - left);
  while (left !== right) {
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    const curr = Math.min(height[left], height[right]) * (right - left);
    if (curr > max) {
      max = curr;
    }
  }
  return max;
}

export { maxArea, maxArea2 };
