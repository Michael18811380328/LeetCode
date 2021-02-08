/*
 * [205] 同构字符串
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 前提：两个字符串的长度相同
// 满足：出现次数相同的字符，他们的位置相同
// 出现一次的，直接过滤；出现 N 次的，记录对应的位置
// 最后判断是否是同构的字符串
// 112 ms , 在所有 JavaScript 提交中击败了22.27%
function isIsomorphic(s, t) {
  const len = s.length;
  const hashS = {};
  const hashT = {};
  for (let i = 0; i < len; i++) {
    const currentS = s[i];
    const currentT = t[i];
    // 查看当前元素在哈希表中的位置，如果不同，返回false
    if (hashS[currentS] !== hashT[currentT]) {
      return false;
    }
    // 将当前元素的位置转换成字符串，写在哈希表中
    if (hashS[currentS]) {
      hashS[currentS] += String(i);
    } else {
      hashS[currentS] = String(i);
    }
    if (hashT[currentT]) {
      hashT[currentT] += String(i);
    } else {
      hashT[currentT] = String(i);
    }
  }
  return true;
}

export { isIsomorphic };
