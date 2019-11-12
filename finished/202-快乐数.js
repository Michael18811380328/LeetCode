/**
 * 202 快乐数
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和
 * 然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 * 输入: 19
  输出: true
  解释:
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
 */

// 思路一：判断一个数是快乐数，那么如果不是快乐数，就可能无限循环，那么算法就出错了。
// 现在判断次数大于100就默认为快乐数（当输入数极大，这个结果是错误的）
// 80 ms, 在所有 javascript 提交中击败了70.59%
/**
 * @param {number} n
 * @return {boolean}
 */
function getSum1(n) {
  let sum = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  while (n > 0) {
    const item = n % 10;
    sum += item * item;
    n = (n - (n % 10)) / 10;
  }
  return sum;
}

function isHappy1(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  let sum = getSum1(n);
  let time = 0;
  while (sum > 0) {
    sum = getSum1(sum);
    time++;
    if (sum === 1) return true;
    if (time > 100) return false;
  }
  return null;
}

// console.log(isHappy(10));


// 思路二：判断一个数不是快乐数。
// 如果一个数的平方和是下面的数之一，那么就不是快乐数；4 16 37 58 89 145 42 20
// 80 ms, 在所有 javascript 提交中击败了70.59%

function getSum2(n) {
  let sum = 0;
  if (n === 0) return 0;
  if (n === 1) return 1;
  while (n > 0) {
    const item = n % 10;
    sum += item * item;
    n = (n - (n % 10)) / 10;
  }
  return sum;
}

function isHappy(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  let sum = getSum2(n);
  const notHappy = [4, 16, 37, 58, 89, 145, 42, 20];
  while (sum > 0) {
    sum = getSum2(sum);
    if (sum === 1) return true;
    if (notHappy.includes(sum)) {
      return false;
    }
  }
  return null;
}

// console.log(isHappy(10));
export { isHappy, isHappy1 };
