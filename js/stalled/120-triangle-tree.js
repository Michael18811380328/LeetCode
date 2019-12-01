// 120. 三角形最小路径和

// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

// 思路一：全部的路径是 2 ^ k 那么可以把全部的路径计算出来。获取三角形的层数k，然后循环获取求和，但是这样做性能很差

// var minimumTotal = function(triangle) {
//   const layerNumber = triangle.length;
//   let path = triangle[0];
//   for (let i = 1; i < layerNumber; i++) {
//     for (let j = 0; j < path.length; j++) {
//       //
//     }
//   }
// };

// 思路二：贪婪算法。获取当前情况下最小的结果，这样正确率在90以上，如果有极端值，可能受到影响

// 思路三：首先把三角形构造一个树，然后计算不同的路径的总和，这样计算性能比方法一好，正确率比第二种好（优先使用第三种思路）

// class Tree(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
//   setValue = function(value) {
//     this.value = value;
//   }
//   setLeft = function(node) {
//     this.left = node;
//   }
//   setRight = function(node) {
//     this.right = node;
//   }
//   // get depth
// }

// function ArrayToTree(array) {
// }
// ArrayToTree(Arr);


// 思路四：数组降维处理，然后把数组的长度增加，这样不需要借用其他的数据结构

// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3],
//   [1,2,3,18,7],
// ]
// 第一层和最后一层特殊处理
// 每一层第一个元素和最后一个元素直接处理，中间的元素使用splice(index, 1, new1, new2) 处理
// 然后处理成下面的数组，计算最后一层的长度即可
// 如果层数是n, 最后一层的长度是2（n-1）
// [
//      [2],
//     [5,6],
//    [11,10,11,13],
//   [15,12,11,18,19,14]
//   [1,2,3,18,7],
//   [16,17,14,15,14,36,37]
// ]

function minimumTotal(triangle) {
  const len = triangle.length;
  if (len ===1) {
    return triangle[0][0];
  }
  // 迭代数组有问题
  for (let i = 1; i < len; i++) {
    // 首先创建一个新数组
    // 应该遍历原始数组，然后放在新的数组中，然后用新的数组取代原始数组
    let newArr = [];
    // 处理第一项
    newArr[0] = triangle[i][0] + triangle[i - 1][0];
    // 处理中间项
    // 注意：第i层的长度是i+1，下标是[0, i]
    for (let j = 1; j < triangle[i].length - 1; j++) {
      let item = triangle[i][j];
      let new1 = item + triangle[i - 1][j - 1];
      let new2 = item + triangle[i - 1][j];
      newArr.push(new1);
      newArr.push(new2);
    }
    // 处理最后一项
    newArr[newArr.length] = triangle[i][i] + triangle[i - 1][i - 1];
    // 使用新数组取代旧数组
    triangle[i] = newArr;
    console.log(newArr);
  }
  return Math.min(...triangle[len - 1]);
}

export { minimumTotal };














