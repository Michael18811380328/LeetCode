// 编写一个函数来查找字符串数组中的最长公共前缀。
// 给定一个字符串数组，返回公共前缀(字符串都是小写)
// 执行用时 : 60 ms, 在所有 JavaScript 提交中击败了 99.08% 的用户
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) {
    return strs[0];
  }
  // 如果长度大于1，那么需要获取公共字符串前缀
  let commonPrefix = '';
  for (let i = 0, len = strs[0].length; i < len; i++) {
    let str = strs[0].charAt(i);
    for (let j = 0; j < strs.length; j++) {
      if (str !== strs[j].charAt(i)) {
        return commonPrefix;
      }
    }
    commonPrefix += str;
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));