// https://leetcode.cn/problems/is-subsequence/description/
// 392：给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
/**
 * 思路1：字符串查找 API 实现；
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence1 = function(s, t) {
  let startIndex = 0;
  for (let i = 0; i < s.length; i++) {
    const index = t.indexOf(s[i], startIndex);
    // 如果某个字符找不到，那么直接返回 false
    if (index === -1) {
      return false;
    }
    // 避免重复，index 应该加 1
    startIndex = index + 1;
  }
  return true;
};

// 思路2：双指针匹配
const isSubsequence2 = function(s, t) {
  let pointer1 = 0;
  let pointer2 = 0;
  const sLen = s.length;
  const tLen = t.length;
  while (pointer1 < sLen && pointer2 < tLen) {
    if (s[pointer1] === t[pointer2]) {
      pointer1++;
    }
    pointer2++;
  }
  return pointer1 === sLen;
};

export { isSubsequence1, isSubsequence2 };
