/*
 * @lc app=leetcode.cn id=452 lang=javascript
 * [452] 用最少数量的箭引爆气球
 */

// /**
//  * @param {number[][]} points
//  * @return {number}
//  */
// // 算法：贪心算法
// // 然后减去这部分子数组，然后递归计算剩余的情况
// var findMinArrowShots = function(points) {
//   // 首先把数组去重一下，避免后面的问题(一对多)
//   let matrix = [];
//   let dict = {};
//   for (let i = 0; i < points.length; i++) {
//     let key = `${points[i][0]}-${points[i][1]}`;
//     if (!dict[key]) {
//       matrix.push(points[i]);
//       dict[key] = true;
//     }
//   }
//   // console.log(matrix);
//   return subFn(matrix);
// };

// // 辅助函数，获取数量
// var subFn = function (matrix) {
//   // 如果传入非法或者空数组，直接返回
//   if (!matrix || (matrix && matrix.length === 0)) {
//     return 0;
//   }
//   // 如果矩阵只有一个子数组，那么返回加1
//   if (matrix.length === 1) {
//     return 1;
//   }
//   // 如果矩阵有多个子数组，那么需要计算当前最大值，然后减去最大值对应的位置，然后递归计算
//   const points = getMaxPoint(matrix);
//   let res = [];
//   // 如果有多个点，这里也需要处理。。。
//   for (let i = 0; i < points.length; i++) {
//     let point = points[i];
//     const newMatrix = matrix.filter((arr) => {
//       return arr[0] > point || arr[1] < point;
//     });
//     let item = 1 + subFn(newMatrix);
//     res.push(item);
//   }
//   return res.length === 1 ? res[0] : Math.min(...res);
// };

// // 也就是求，多个节点中，哪个节点获取的值最大，这个可以使用哈希表实现（需要循环一次，能否有更好的思路）
// var getMaxPoint = function(matrix) {
//   let dict = {};
//   let max = 0;
//   let currentKeys = [];
//   for (let i = 0; i < matrix.length; i++) {
//     let item = matrix[i];
//     let start = item[0];
//     let end = item[1];
//     // 这个有很大的性能问题
//     for (let j = start; j <= end; j++) {
//       if (dict[j]) {
//         dict[j]++;
//       } else {
//         dict[j] = 1;
//       }
//       if (dict[j] > max) {
//         max = dict[j];
//         currentKeys = [j];
//       }
//       else if (dict[j] === max) {
//         currentKeys.push(j);
//       }
//     }
//   }
//   // console.log(max, currentKey);
//   return currentKeys; // 这是当前最大值的数组，然后需要删除对应的数组
// }

// [[9,17],[4,12],[4,8],[4,8],[7,13],[3,4],[7,12],[9,15]]
// 这是现在出错的数组
// 按照贪心算法的出来的是3，实际上结果是2（因为最大值的问题）
// 如果有多个最小值，那么需要计算哪个最小
// 这个可能有性能问题，不过需要计算

// [[2,3],[7,15],[5,12],[4,5],[8,13],[9,16],[5,8],[8,16],[3,4],[8,17]]
// 看来还需要考虑出现的次数

// [[4289383,51220269],[81692777,96329692],[57747793,81986128],[19885386,69645878],[96516649,186158070],[25202362,75692389],[83368690,85888749],[44897763,112411689],[65180540,105563966],[4089172,7544908]]
// 如何求长度很长的数组的公共区间？不能使用离散的对象表示，最好使用区间表示
// 现在这样性能不好，会内存溢出。。。
// 需要减少不必要的循环

// 官方解答（排序+贪心算法）伪代码
// 链接：https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/solutions/494515/yong-zui-shao-shu-liang-de-jian-yin-bao-qi-qiu-1-2/

// let points := [[x(0), y(0)], [x(1), y(1)], ... [x(n-1), y(n-1)]]，表示 n 个气球
// let burst := [false] * n，表示每个气球是否被引爆
// let ans := 1，表示射出的箭数

// 将 points 按照 y 值（右边界）进行升序排序

// while burst 中还有 false 值 do
//     let i := 最小的满足 burst[i] = false 的索引 i
//     for j := i to n-1 do
//         if x(j) <= y(i) then
//             burst[j] := true
//         end if
//     end for
// end while

// return ans

const findMinArrowShots = function(points) {
  if (!points.length) {
    return 0;
  }
  points.sort((a, b) => a[1] - b[1]);
  let pos = points[0][1];
  let ans = 1;
  for (const balloon of points) {
    if (balloon[0] > pos) {
      pos = balloon[1];
      ans++;
    }
  }
  return ans;
};

export { findMinArrowShots };
