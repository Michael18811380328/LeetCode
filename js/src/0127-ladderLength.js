/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * 127. 单词接龙(无向图)
 * https://leetcode.cn/problems/word-ladder/
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * Your runtime beats 48.99 % of js submissions
 * Your memory usage beats 92.36 % (43.9 MB)
 */
const ladderLength = function(beginWord, endWord, wordList) {
  // 辅助函数：判断两个单词是否可以转换(有一个字母不同)
  canConvert = (a, b) => {
    let num = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        num++;
      }
      if (num > 1) {
        return false;
      }
    }
    return true;
  };

  // 特殊情况：字典中可能有和开始单词重复的，先去掉
  const index = wordList.indexOf(beginWord);
  if (index > -1) {
    wordList.splice(index, 1);
  }

  const list = [];
  list.push(beginWord);

  // 初始化长度是2，beginWord -> middle -> endWord 是两步
  let res = 2;

  while (list.length > 0) {
    // 获取当前的长度（这一层），然后遍历当前的这一层单词
    let currentLen = list.length;
    while (currentLen--) {
      const item = list.shift();
      for (let i = 0; i < wordList.length; i++) {
        if (canConvert(item, wordList[i])) {
          if (wordList[i] === endWord) {
            return res;
          } else {
            list.push(wordList[i]);
            // 这个很重要，避免死循环
            wordList.splice(i, 1);
            i--;
          }
        }
      }
    }
    // 这一层循环结束，层数增加
    res++;
  }
  // 如果没有，返回0
  return 0;
};
// @lc code=end

export { ladderLength };
