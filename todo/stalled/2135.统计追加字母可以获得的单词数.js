/*
 * @lc app=leetcode.cn id=2135 lang=javascript
 *
 * [2135] 统计追加字母可以获得的单词数
 */

// @lc code=start
/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
// 1、遍历 target 数组，拿到每一个单词，进行判断
// 2、先通过长度过滤（遍历 start 数组）
// 长度必须等于 target[index] - 1 才行
// 然后对比这两个字符串，求交集和并集，如果不相同的元素等于1，就是满足的；如果不相同的元素大于1，就不满足（写一个判断的辅助函数）
// 3、累计满足的单词数量
// 这个问题可以这样解决
var wordCount = function(startWords, targetWords) {
  function check(short_str, long_str) {
    let dict = {};
    for (let i = 0; i < long_str.length; i++) {
      let key = long_str[i];
      if (!dict[key]) {
        dict[key] = 1;
      } else {
        dict[key] = dict[key] + 1;
      }
    }
    for (let i = 0; i < short_str.length; i++) {
      if (dict[short_str[i]]) {
        dict[short_str[i]] = dict[short_str[i]] - 1;
      } else {
        return false; // 存在其他的字符串，不满足条件
      }
    }
    return true; // 满足条件
  }

  let result = 0;
  for (let i = 0; i < targetWords.length; i++) {
    const current = targetWords[i];
    for (let j = 0; j < startWords.length; j++) {
      if (startWords[j].length + 1 === current.length) {
        // console.log(startWords[j], current, check(startWords[j], current));
        if (check(startWords[j], current)) {
          result += 1;
          break;
        }
      }
    }
  }
  return result;
};
// 91/93 cases passed 当数组很长时，会超时，需要优化算法

// console.log(wordCount(["ant","act","tack"], ["tack","act","acti"]) === 2)
// console.log(wordCount(["ab","a"], ["abc","abcd"]) === 1)
// 不足点：每次需要计算 start[index] 中的数量，性能较差，最好转换成字典存储，这样一次即可，不需要每次遍历，因为这个是固定的
// @lc code=end

