/**
 * @param {string} s
 * @return {string[]}
 * 排列问题，基本是回溯算法（这个不算严格的回溯，是字符串，不涉及数组 includes性能问题，现在按照深度优先递归实现）
 */
// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。
// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。
// 还有就是考察是否是字母 charAt
const letterCasePermutation = function(s) {
  const len = s.length;
  const dict = {};
  // 辅助函数，判断当前字符是否是数字
  const checkNum = (str) => {
    const code = str.charCodeAt(0);
    return code >= 48 && code <= 57;
  };
  const backTrack = (curr = '') => {
    if (curr.length > len) {
      return;
    }
    if (curr.length === len) {
      dict[curr] = true;
    }
    if (curr.length < len) {
      // 开始回溯（或者函数递归）
      const next = s[curr.length];
      // 判断是否是数字
      if (checkNum(next)) {
        backTrack(curr + s[curr.length]);
      } else {
        backTrack(curr + s[curr.length].toLowerCase());
        backTrack(curr + s[curr.length].toUpperCase());
      }
    }
  };
  // 开始回溯
  backTrack();
  return [...Object.keys(dict)];
};

// console.log(letterCasePermutation("a1b2")) // ["a1b2", "a1B2", "A1b2", "A1B2"]
// console.log(letterCasePermutation("3z4")) // ["3z4","3Z4"]

export { letterCasePermutation };
