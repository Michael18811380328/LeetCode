// 分治算法
// 复杂问题分情况解决，然后不同情况合并成结果并返回
// 二分法是典型的分治算法
// 分支算法通常和递归循环使用（分类然后降维）

// 案例：实现自定义幂运算
function myPow(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  else if (n % 2) {
    return x * myPow(x, n - 1);
  } 
  else {
    return myPow(x * x, n / 2);
  }
}
