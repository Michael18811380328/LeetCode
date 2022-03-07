/**
 * @param {number[]} arr
 * @return {number[]}
 */
// 104 ms, 在所有 JavaScript 提交中击败了 93.53%
const sortByBits = function(arr) {
  // 首先对整数数组从小到大排序
  arr = arr.sort((a, b) => a - b);
  // 设置一个函数，计算某个数中二进制1的数量
  const calcu = function(num) {
    let res = 0;
    while (num >= 1) {
      const tmp = num % 2;
      num = (num - tmp) / 2;
      if (tmp === 1) res++;
    }
    return res;
  };
  // 设置一个二维数组（对象）。其中第一层存放1的个数，第二层存放数字
  const matrix = [];
  // 遍历排序后的数组，然后放在结果数组中
  for (let i = 0; i < arr.length; i++) {
    const times = calcu(arr[i]);
    if (!matrix[times]) {
      matrix[times] = [];
    }
    matrix[times].push(arr[i]);
  }
  // 结果数组直接降维，获取需要输出的数组
  return matrix.flat();
};
