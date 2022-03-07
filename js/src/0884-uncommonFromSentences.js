/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

//
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
// 53/53 cases passed (88 ms)
// Your runtime beats 55.77 % of javascript submissions
// Your memory usage beats 37.66 % of javascript submissions (38.8 MB)
const uncommonFromSentences = function(A, B) {
  // 如果一个单词出现两次
  // 或者一个单词在两个句子中出现
  // 那么就是常见单词
  const arrA = A.split(' ');
  const arrB = B.split(' ');
  const arr = arrA.concat(arrB);
  const dict = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (dict[key]) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }
  const result = [];
  for (const key in dict) {
    const value = dict[key];
    if (value === 1) {
      result.push(key);
    }
  }
  return result;
  // 我们先把字符串变成数组，然后遍历数组，存放在一个对象中
  // 然后遍历对象，找到仅仅存在一次的单词即可
};
