/**
 * @param {string} s
 * @return {number}
 */
// 思路：如果一个长度是N的字符串，最后变成的交替二进制字符串，只有两种情况 就是0开头或者1开头。
// 我们可以新建两个目标字符串，然后循环一下，和原来的字符串对比，求出不同的值的情况
// 然后求这两个值的最小值
// 这样循环三次，时间复杂度是N，字符串长度是10000，时间上可以接受，考虑是否有更好的办法
// 这个方法可以优化
// 96 ms
const minOperations = function(s) {
  const len = s.length;
  let strA = '';
  let strB = '';
  let basicA = '0';
  let basicB = '1';
  for (let i = 0; i < len; i++) {
    strA = strA + basicA;
    strB = strB + basicB;
    // swap basic A and B
    const tmp = basicB;
    basicB = basicA;
    basicA = tmp;
    // 优化：循环一次即可，不需要设置这两个临时数组，直接比较 basicA basicB 和 s[i] 即可，然后获取 num1 num2 的最小值
  }
  // 现在获取了两个基础的变量
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] !== strA[i]) num1++;
    if (s[i] !== strB[i]) num2++;
  }
  return Math.min(num1, num2);
};
