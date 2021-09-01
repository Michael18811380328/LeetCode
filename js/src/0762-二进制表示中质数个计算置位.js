/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
// 最大值是10000，那么可以执行一次循环（最好不要这样）
// 直接思路：执行一次循环，把每一个数字转换成二进制，然后判断1的个数是否是质数
// 这样显然不是好办法
// 能否找规律，使用动态规划做？
// 先把最大位置对应的二进制数字的位数，计算出质数列表，然后通过一次循环（这个最大是20）
// 位运算不会操作
// Your runtime beats 80 % of javascript submissions
var countPrimeSetBits = function(L, R) {
  // 创建前20中质数的数组
  const dict = [false,
    false, true, true, false, true,
    false, true, false, false, false,
    true, false, true, false, false,
    false, true, false, true, false 
  ];
  let result = 0;
  // 然后遍历数组，获取二进制数中的1的个数
  for (let i = L; i <= R; i++) {
    let item = getNumber(i);
    if (dict[item]) {
      result++;
    }
  }
  return result;
};

var getNumber = (num) => {
  let res = 0;
  while (num > 0) {
    let remain = num % 2;
    res += remain;
    num = (num - remain) / 2;
  }
  return res;
}

// @lc code=end

