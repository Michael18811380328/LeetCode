// 84 计算给定柱状图的最大的面积
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

// 求在该柱状图中，能够勾勒出来的矩形的最大面积。
// 以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。其面积为 10 个单位。

/**
 * @param {number[]} heights
 * @return {number}
 */
// 思路一：循环数组：看当前情况和前面的所有的数构成面积的最大值是多少；执行两次循环可以获取最大的面积。
// 使用两次循环求最值，元素较多超时，性能不好
function largestRectangleArea1(heights) {
  const len = heights.length;
  // 如果只有一个柱子，那么返回这个柱子的高度*1
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return heights[0];
  }
  let max = heights[0];
  for (let i = 1; i < len + 1; i++) {
    for (let j = 0; j < i; j++) {
      const arr = heights.slice(j, i);
      // 当前的柱状图
      let area;
      if (arr.length === 0) {
        // 如果子柱子是一个没直接返回长度
        area = arr[0];
      } else {
        // 获取柱状图的最小值，乘以长度
        const min = Math.min(...arr);
        area = min * arr.length;
      }
      max = area > max ? area : max;
    }
  }
  return max;
}

// 思路二 优化：外循环中，如果后一个数组的高度比前一个大，那么后一个构成的面积一定比前一个大。所以这样就不需要计算前一个的面积了
// 这样遇上最坏的情况，就是数组是递减数列，那么计算量还是n*n，有bug
// function largestRectangleArea2(heights) {
//   const len = heights.length;
//   // 处理特殊值
//   if (len === 0) return 0;
//   if (len === 1) return heights[0];

//   let max = heights[0];
//   for (let i = 1; i < len + 1; i++) {
//     if (heights[i] < heights[i + 1]) {
//       continue;
//     }
//     for (let j = 0; j < i; j++) {
//       const arr = heights.slice(j, i + 1);
//       let area;
//       if (arr.length === 0) {
//         // 如果子柱子是一个没直接返回长度
//         area = arr[0];
//       } else {
//         // 获取柱状图的最小值，乘以长度
//         const min = Math.min(...arr);
//         area = min * arr.length;
//       }
//       max = area > max ? area : max;
//     }
//   }
//   return max;
// }

// 正确的思路：单调栈
// 108 ms, 在所有 JavaScript 提交中击败了41.98%
// 参考：https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/wo-yong-qiao-miao-de-bi-yu-jiang-dan-diao-zhan-jie/
const largestRectangleArea = (heights) => {
  // 最大面积
  let maxArea = 0;
  // 单调递增的栈(存放数组索引)
  const stack = [];
  // 先在开头和结尾加一个0，避免开始结尾算不到的情况
  heights = [0, ...heights, 0];
  // 循环数组
  for (let i = 0; i < heights.length; i++) {
    // 如果新的bar，比栈顶bar矮
    while (heights[i] < heights[stack[stack.length - 1]]) {
      // 栈顶元素出栈，并保存栈顶bar的索引，到临时变量
      const stackTopIndex = stack.pop();
      // 计算出栈的bar形成的长方形面积
      // 高 = 当前出栈的长方形高度
      // 宽 = 当前 bar 的索引 i - 新的栈顶索引 - 1
      // while 循环中，把低于新bar 的全部矩形都拿出去，然后都计算一下最大的面积
      const tmpMax = heights[stackTopIndex] * (i - stack[stack.length - 1] - 1);
      // 更新最大面积
      maxArea = Math.max(maxArea, tmpMax);
    }

    // 当前bar比栈顶bar高了，直接入栈；
    stack.push(i);
  }
  return maxArea;
};

// const fn = (heights) => {
//   let max = 0;
//   let stack = [];
//   heights = [0, ...heights, 0];
//   for (let i = 0; i < heights.length; i++) {
//     while (heights[i] < heights[stack[stack.length - 1]]) {
//       let tmpIndex = stack.pop();
//       let area = heights[tmpIndex] * (i - stack[stack.length - 1] - 1);
//       max = Math.max(area, max);
//     }
//     stack.push(i);
//   }
//   return max;
// }

export { largestRectangleArea, largestRectangleArea1 };
