/*
 * @lc app=leetcode.cn id=1813 lang=javascript
 *
 * [1813] 句子相似性 III
 */

// @lc code=start
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  // 如果字符串相同，直接返回真
  if (sentence1 === sentence2) {
    return true;
  }
  // 1 首先比较两个句子的长度，分出短的和长的句子
  const s1Len = sentence1.length;
  const s2Len = sentence2.length;
  let short = s1Len < s2Len ? sentence1 : sentence2;
  let long = s1Len < s2Len ? sentence2 : sentence1;
  return checkSimilar(short, long);
  // 优化：如果前面一部分找不到，直接返回假即可；
  // 能否使用二分法优化等等？
  // 或者使用指针等优化？  
};

var checkSimilar = function(short, long) {
  // 2 传入子函数
  // 截取短的部分（0-len）然后看前后两部分是否是另一个的 index
  // 如果前后两部分都可以找到，那么返回真，否则返回假
  const len = short.length;
  for (let i = 1; i < len; i++) {
    let left = short.slice(0, i);
    let right = short.slice(i);
    // console.log(left, right, long);
    if (long.indexOf(left) < 0) {
      return false;
    }
    if (long.indexOf(left) >= 0 && long.indexOf(right) >= 0) {
      return true;
    }
  }
  return false;
}

// 现在不满足
// sentence1 = "of", sentence2 = "A lot of words"
// 输出：false
// 解释：没法往这两个句子中的一个句子只插入一个句子就得到另一个句子。

// 输入：sentence1 = "Luky", sentence2 = "Lucccky"
// 输出：false
// 现在破坏了一个单词
// 这个不是简单的字符串插入，而是单词插入，这里需要注意

// @lc code=end

