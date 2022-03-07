// 给你两个字符串数组 words1 和 words2 ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。
// 考点：数组遍历转换成对象和计数，然后循环对象即可
/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = function(words1, words2) {
  const dict1 = {};
  const dict2 = {};
  for (let i = 0; i < words1.length; i++) {
    const curr = words1[i];
    if (!dict1[curr]) {
      dict1[curr] = 1;
    } else {
      dict1[curr] = dict1[curr] + 1;
    }
  }
  for (let i = 0; i < words2.length; i++) {
    const curr = words2[i];
    if (!dict2[curr]) {
      dict2[curr] = 1;
    } else {
      dict2[curr] = dict2[curr] + 1;
    }
  }
  let sum = 0;
  for (const key in dict1) {
    if (dict1[key] === 1 && dict2[key] === 1) {
      sum++;
    }
  }
  return sum;
};

export { countWords };
