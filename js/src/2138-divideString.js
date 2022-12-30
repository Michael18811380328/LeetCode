/**
 * [2138] 将字符串拆分为若干长度为 k 的组
 * Your runtime beats 100 % of javascript submissions
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
//
const divideString = function(s, k, fill) {
  const resArr = [];
  // 思路：当S的长度大于K时，每次减掉前K个字符
  while (s.length >= k) {
    resArr.push(s.slice(0, k));
    s = s.slice(k);
  }
  // 最后一个特殊处理
  if (s.length > 0) {
    s = s.padEnd(k, fill);
    resArr.push(s);
  }
  return resArr;
};

export default divideString;
