/**
 * [2255] 统计是给定字符串前缀的字符串数目
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
// 方法一：遍历字符串的形式，时间复杂度比较高
// Your runtime beats 7.6 % of javascript submissions
const countPrefixes1 = function(words, s) {
  // 循环一次数组，然后获取满足的个数
  const check = (item) => {
    const len = item.length;
    for (let i = 0; i < len; i++) {
      if (item[i] !== s[i]) {
        return 0;
      }
    }
    return 1;
  };
  let num = 0;
  const cache = {};
  for (let j = 0; j < words.length; j++) {
    if (!cache[words[j]]) {
      const result = check(words[j]);
      cache[words[j]] = result;
    }
    num = num + cache[words[j]];
  }
  return num;
};

// 方法二：改成 startsWith 方法实现
// Your runtime beats 60.84 % of javascript submissions
const countPrefixes2 = function(words, s) {
  let num = 0;
  const cache = {};
  for (let j = 0; j < words.length; j++) {
    if (!cache[words[j]]) {
      const result = s.startsWith(words[j]) ? 1 : 0;
      cache[words[j]] = result;
    }
    num = num + cache[words[j]];
  }
  return num;
};

export { countPrefixes1, countPrefixes2 };
