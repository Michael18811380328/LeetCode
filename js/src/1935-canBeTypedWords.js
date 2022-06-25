/*
 * @lc app=leetcode.cn id=1935 lang=javascript
 *
 * [1935] 可以输入的最大单词数
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */

// 思路一：先把字符串转换成数组，然后每一项过滤一下
// 64 ms Your runtime beats 94.36 % of javascript
const canBeTypedWords = function (text, brokenLetters) {
  const textList = text.split(' ');
  const map = {};
  for (let i = 0; i < brokenLetters.length; i++) {
    map[brokenLetters[i]] = true;
  }
  return textList.filter((item) => {
    for (let j = 0; j < item.length; j++) {
      // 这里可以减少一部分循环
      if (map[item[j]]) return false;
    }
    return true;
  }).length;
};

// 思路二：直接把错误的变成字典，然后遍历一次字符串即可
// 这样需要循环全部字符串，性能较差

// @lc code=end
export { canBeTypedWords };
