/**
 * @param {string} s
 * @return {string}
 */
// 72 ms, 在所有 JavaScript 提交中击败了97.34%
// 难度简单，主要是数组和字符串基本操作
const sortSentence = function(s) {
  // 先把字符串按照空格转换成字符串数组
  const arr1 = s.split(' ');
  // 然后数组每一项转换成对象，把单词部分和数字部分分开
  let arr2 = [];
  arr1.forEach((item) => {
    const len = item.length;
    const str = item.slice(0, len - 1);
    const num = Number(item[len - 1]);
    arr2.push({ str, num });
  });
  // 然后数组按照数字部分排序
  arr2 = arr2.sort((a, b) => {
    return a.num > b.num ? 1 : -1;
  });
  // 把数组中的数字部分去掉，然后拼接起来
  return arr2.map((item) => {
    return item.str;
  }).join(' ');
};
