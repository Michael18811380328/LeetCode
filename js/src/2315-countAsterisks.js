/**
 * @param {string} s
 * @return {number}
 * 基本思路：循环一次字符串，根据 | 的位置设置一个状态，然后累加即可
 * 难度：初级；时间复杂度： O(n)
 * 64 ms, 在所有 JavaScript 提交中击败了56.99%
 */
const countAsterisks1 = function(s) {
  let flag = true;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') {
      flag = !flag;
    }
    else if (s[i] === '*' && flag === true) {
      num++;
    }
  }
  return num;
};

// 思路2：改进：按照 | 把字符串转换成数组，然后把数组中奇数和偶数项分开，再拼接起来
// 如果字符串较长，而且有一些连续的字符，这样效果好一点
const countAsterisks2 = function(s) {
  // 可以先判断是否有 * 没有的话直接返回，处理特殊情况
  if (!s.includes('*')) {
    return 0;
  }
  let sum = 0;
  const arr = s.split('|');
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      const curr = arr[i];
      for (let j = 0; j < curr.length; j++) {
        if (curr[j] === '*') {
          sum++;
        }
      }
    }
  }
  return sum;
};

// 在官方测试案例情况中，这两个算法的性能差距不大
// 根据实际数据选择适合的算法
export { countAsterisks1, countAsterisks2 };
