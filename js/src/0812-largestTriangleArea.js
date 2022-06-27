/*
 * @lc app=leetcode.cn id=812 lang=javascript
 *
 * [812] 最大三角形面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// 1、最差的方法，三重循环
// Your runtime beats 85.29 % of javascript submissions
const largestTriangleArea = function(points) {
  const len = points.length;
  if (len === 3) {
    return getArea(points[0], points[1], points[2]);
  }
  let max = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const area = getArea(points[i], points[j], points[k]);
        max = area > max ? area : max;
      }
    }
  }
  return max;
};

// 2、试一下这个思路
// 这个思路不正确
// 首先双重循环，找到当前距离最长的两个点构成的线段
// 然后遍历剩下的点，找到最大的面积
// const largestTriangleArea = function(points) {
//   const len = points.length;
//   // if (len === 3) 直接计算
//   let max = 0;
//   let a, b;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       let distance = getDistance(points[i], points[j]);
//       if (distance > max) {
//         a = i;
//         b = j;
//       }
//     }
//   }
//   // 现在获取的AB点是最长的线段
//   // 然后再次遍历一次数组，计算面积最大的情况
//   let maxArea = 0;
//   for (let i = 0; i < len; i++) {
//     if (i === a || i === b) continue;
//     let area = getArea(points[a], points[b], points[i]);
//     console.log(area);
//     maxArea = maxArea > area ? maxArea : area;
//   }
//   return maxArea;
// };

// const getDistance = (a, b) => {
//   return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
// }

const getArea = (a, b, c) => {
  const x1 = a[0];
  const y1 = a[1];
  const x2 = b[0];
  const y2 = b[1];
  const x3 = c[0];
  const y3 = c[1];
  return Math.abs((x1 - x3) * (y2 - y3) - (x2 - x3) * (y1 - y3)) / 2;
};
// @lc code=end
