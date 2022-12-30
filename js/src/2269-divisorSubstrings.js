/**
 * [2269] 找到一个数字的 K 美丽值
 * 一个整数 num 的 k 美丽值定义为 num 中符合以下条件的 子字符串 数目：
 * 子字符串长度为 k && 子字符串能整除 num 。
 * @param {number} num
 * @param {number} k
 * @return {number}
 * Your runtime beats 89.08 % of javascript submissions
 */
const divisorSubstrings = function(num, k) {
  const str = String(num);
  let res = 0;
  for (let i = 0; i <= str.length - k; i++) {
    const curr = str.slice(i, i + k);
    if (num % Number(curr) === 0) {
      res++;
    }
  }
  return res;
};

export { divisorSubstrings };
