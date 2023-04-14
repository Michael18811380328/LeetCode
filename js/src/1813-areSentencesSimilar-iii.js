/*
 * @lc app=leetcode.cn id=1813 lang=javascript
 * [1813] 句子相似性 III
 */
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean} return sentences are similar
 */
const areSentencesSimilar = function(sentence1, sentence2) {
  // 如果字符串相同，直接返回真
  if (sentence1 === sentence2) {
    return true;
  }
  // 先把字符串转换成数组，然后双指针，从开始和结束分别向中间遍历
  // 如果双指针相遇（在短的一个字符串中相遇，那么就满足）；如果不相遇，就不满足
  const arr1 = sentence1.split(' ');
  const arr2 = sentence2.split(' ');
  const len1 = arr1.length;
  const len2 = arr2.length;
  const lenMin = Math.min(len1, len2);
  // 如果数组长度相同，但是句子字符串不同，那么一定不满足
  if (len1 === len2) return false;
  let start = 0;
  while (arr1[start] === arr2[start]) {
    start++;
  }
  // 如果左侧相同已经等于最小值，直接返回真
  if (start === lenMin) {
    return true;
  }
  let end = 0;
  while (arr1[len1 - 1 - end] === arr2[len2 - 1 - end]) {
    end++;
  }
  // 如果右侧相同已经等于最小值，直接返回真
  if (end === lenMin) {
    return true;
  }
  // 如果两侧的相同的，大于等于最小数组长度，返回真
  // 大于的情况 "A B C D B B", "A B B"，等于的情况 "My name is Haley", "My Haley"
  return (start + end) >= lenMin;
};

// console.log(areSentencesSimilar("of", "A lot of words")) // false
// console.log(areSentencesSimilar("Luky", "Lucccky")) // false
// console.log(areSentencesSimilar("My name is Haley", "My Haley")) // true
// console.log(areSentencesSimilar("Eating right now", "Eating")) // true
// console.log(areSentencesSimilar("a", "a aa a")) // true
// console.log(areSentencesSimilar("A B C D B B", "A B B")) // true

// 官方解答：直接在 while 循环中，左右指针限制最大值
const areSentencesSimilar2 = function(sentence1, sentence2) {
  const words1 = sentence1.split(' ');
  const words2 = sentence2.split(' ');
  let i = 0;
  let j = 0;
  while (i < words1.length && i < words2.length && words1[i] === words2[i]) {
    i++;
  }
  while (j < words1.length - i && j < words2.length - i && words1[words1.length - j - 1] === words2[words2.length - j - 1]) {
    j++;
  }
  return i + j == Math.min(words1.length, words2.length);
};

// 作者：LeetCode-Solution
// 链接：https://leetcode.cn/problems/sentence-similarity-iii/solution/ju-zi-xiang-si-xing-iii-by-leetcode-solu-vjy7/
// 来源：力扣（LeetCode）

export { areSentencesSimilar, areSentencesSimilar2 };
