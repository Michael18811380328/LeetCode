// 70 爬楼梯
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 给定 n 是一个正整数

// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶

// 思路：首先把所有情况列出来，n 个 1；然后每一种情况下就是排列组合问题；最后计算出全部的方法；因为2的数量有限，外部循环时2的个数，循环一次可以获取2
// 例如：X = 2 * n + 1 (因为全部的1都是一样的，所以计算2的位置即可)

// 性能不好
// 64 ms , 在所有 javascript 提交中击败了76.92%的用户
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function climbStairs(n) {
  let result = 0;
  // 如果n是1，直接返回1
  if (n === 1) return 1;
  for (let i = 0; i <= n / 2; i++) {
    // 外循环获取i的次数
    const j = n - 2 * i;
    // 现在就是 j 个 1 和 i 个 2 排列，共计（i+j）个位置 C(i, i + j)
    // (i + j)! / i! / j!
    const res = factorial(i + j) / factorial(i) / factorial(j);
    result += res;
  }
  return result;
}

export { climbStairs };
