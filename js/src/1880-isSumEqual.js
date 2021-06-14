/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
// 84 ms, 在所有 JavaScript 提交中击败了50.79%
// 考点：字符串解析和转换
// 时间复杂度：O(n) 遍历一次字符串（字符串长度）
var isSumEqual = function(firstWord, secondWord, targetWord) {
  // 辅助函数:计算一个字符串对应的数字
  let getNum = (str) => {
    let res = 0;
    while (str.length > 0) {
      if (str[0] === 'a' && res === 0) {
        str = str.slice(1);
      } else {
        let curr = str[0];
        let currNum = curr.charCodeAt(0) - 97;
        res = res * 10 + currNum;
        str = str.slice(1);
      }
    }
    return res;
  };
  return getNum(firstWord) + getNum(secondWord) === getNum(targetWord);
};
