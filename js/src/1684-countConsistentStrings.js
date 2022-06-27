/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// 116 ms, 在所有 JavaScript 提交中击败了 100.00%
const countConsistentStrings = function(allowed, words) {
  // 先把allowed转换成一个字典
  const dict = {};
  for (let i = 0; i < allowed.length; i++) {
    const key = allowed[i];
    dict[key] = true;
  }
  let res = 0;
  const judge = function(s) {
    for (let i = 0; i < s.length; i++) {
      if (!dict[s[i]]) return 0;
    }
    return 1;
  };
  // 然后遍历数组，判断每一个字符串是否满足要求
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    res += judge(word);
  }
  return res;
};

export { countConsistentStrings };
