// finished-2

// 202
// 获取快乐数：快乐数就是每一个位置的平方和是1（如果不是继续计算）。

// 辅助函数：计算一个数的平方和
function getSum(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let sum = 0;
  while (n > 0) {
    const item = n % 10;
    sum += item ** 2;
    n = (n - n % 10) / 10;
  }
  return sum;
}

// 正向思路：计算一个数的平方和，直到平方和是1。这样对于较小的数可以实现，对于较大的数字不好实现。可能一直循环获取不到结果。
function isHappy1(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  let sum = getSum(n);
  let time = 0;
  while (sum > 0) {
    sum = getSum(sum);
    time++;
    if (sum === 1) return true;
    if (time > 100) return false;
  }
}

// 反向思路：有一部分数字的平方和是特殊值，然后就进入死循环。
function isHappy(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  let sum = getSum(n);
  const notHappy = [4, 16, 37, 58, 89, 145, 42, 20];
  while (sum > 0) {
    sum = getSum(sum);
    if (sum === 1) return true;
    if (notHappy.includes(sum)) return false;
  }
}

// 204 统计小于n的质数的数量

// 辅助函数：判断一个数是否为质数（性能不好）
