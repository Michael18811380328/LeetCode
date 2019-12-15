// 120. 三角形最小路径和

// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。注意：可能存在负数或者0


// 思路一：可以直接暴力计算全部的路径，然后求得最小值（本地通过，LeetCode超出限制）
// 辅助函数，获取一个位置下面的最小路径
// 思路一：全部的路径是 2 ^ k 那么可以把全部的路径计算出来。获取三角形的层数k，然后循环获取求和，但是这样做性能很差
function getMin1(i, j, triangle) {
  if (triangle[i + 1]) {
    return triangle[i][j] + Math.min(getMin1(i + 1, j, triangle), getMin1(i + 1, j + 1, triangle));
  }
  return triangle[i][j];
}

function minimumTotal1(triangle) {
  const len = triangle.length;
  if (len === 1) {
    return triangle[0][0];
  }
  return getMin1(0, 0, triangle);
}

// 改进版：把数组绑定到全局变量上，避免每次传递数组，占用内存；使用尾递归优化内存(测试可以使用，但是全局无法绑定)
// 这样可以使用全局变量，但是还是超时。
function getMin2(i, j) {
  if (window.triangle[i + 1]) {
    return window.triangle[i][j] + Math.min(getMin2(i + 1, j), getMin2(i + 1, j + 1));
  }
  return window.triangle[i][j];
}

function minimumTotal2(triangle) {
  const len = triangle.length;
  window.triangle = triangle;
  if (len === 1) {
    return triangle[0][0];
  }
  return getMin2(0, 0);
}

// 继续改进版：可以使用哈希表存放最小长度，避免多次递归运算
// 84 ms, 在所有 javascript 提交中击败了 19.08%
function getMin3(i, j, triangle) {
  const key = `${i}+${j}`;
  if (triangle[key]) {
    return triangle[key];
  }
  let result = triangle[i][j];
  if (triangle[i + 1]) {
    result += Math.min(getMin3(i + 1, j, triangle), getMin3(i + 1, j + 1, triangle));
  }
  triangle[key] = result;
  return result;
}

function minimumTotal3(triangle) {
  const len = triangle.length;
  if (len === 1) {
    return triangle[0][0];
  }
  return getMin3(0, 0, triangle);
}


// 思路四：首先把三角形构造一个树，然后计算不同的路径的总和，这样计算性能比方法一好，正确率比第二种好（优先使用第三种思路）

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


// 思路五：数组降维处理，然后把数组的长度增加，这样不需要借用其他的数据结构

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

// 这个思路不成熟
function minimumTotal5(triangle) {
  const len = triangle.length;
  if (len === 1) {
    return triangle[0][0];
  }
  // 迭代数组有问题
  for (let i = 1; i < len; i++) {
    // 首先创建一个新数组
    // 应该遍历原始数组，然后放在新的数组中，然后用新的数组取代原始数组
    const newArr = [];
    // 处理第一项
    newArr[0] = triangle[i][0] + triangle[i - 1][0];
    // 处理中间项
    // 注意：第i层的长度是i+1，下标是[0, i]
    for (let j = 1; j < triangle[i].length - 1; j++) {
      const item = triangle[i][j];
      const new1 = item + triangle[i - 1][j - 1];
      const new2 = item + triangle[i - 1][j];
      newArr.push(new1);
      newArr.push(new2);
    }
    // 处理最后一项
    newArr[newArr.length] = triangle[i][i] + triangle[i - 1][i - 1];
    // 使用新数组取代旧数组
    triangle[i] = newArr;
  }
  return Math.min(...triangle[len - 1]);
}

export { minimumTotal1, minimumTotal2, minimumTotal3, minimumTotal5 };
