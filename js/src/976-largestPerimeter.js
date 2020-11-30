/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  // 辅助函数：判断是否构成三角形
  var isTriangle = function (a, b, c) {
    return (a + b + c) > 2 * Math.max(a, b, c);
  }
  // 辅助函数：判断是否构成三角形(a是最大值)
  var isTri = function(a, b, c) {
    return (a + b + c) > 2 * a;
  }
  var sum = function(a, b, c) {
    return a + b + c;
  }
  const len = A.length;
  // 如果是3个，直接判断返回
  if (len === 3) {
    if (isTriangle(A[0], A[1], A[2])) {
      return sum(...A);
    } else {
      return 0;
    }
  }
  // 如果是大于3个，先排序，然后获取最大的三个数
  A.sort((a, b) => b - a);
  // 如果是三角形，直接返回，不是的话，去掉最大的，然后继续向下找
  while (!isTri(A[0], A[1], A[2]) && A.length > 2) {
    A.shift();
  }
  return A.length > 2 ? sum(A[0], A[1], A[2]) : 0;
};
