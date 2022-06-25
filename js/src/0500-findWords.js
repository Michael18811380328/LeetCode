/*
 * [500] 键盘行
 */
// 96 ms, 在所有 JavaScript 提交中击败了16.11%
const isTrue = function(string) {
  const len = string.length;
  // 如果长度是1-0那么符合条件
  if (len < 2) return true;
  const str1 = 'qwertyuiop';
  const str2 = 'asdfghjkl';
  const str3 = 'zxcvbnm';
  const str = string.toLowerCase();
  // 待优化：字符串最好去重处理，减少循环的次数
  const firstStr = str[0];
  let target;
  if (str1.includes(firstStr)) {
    target = str1;
  } else if (str2.includes(firstStr)) {
    target = str2;
  } else if (str3.includes(firstStr)) {
    target = str3;
  }
  // console.log(target, firstStr);
  if (!target) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    const item = str[i];
    if (!target.includes(item)) return false;
  }
  return true;
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
  // 下一个辅助函数，判断每一个单词是否合理,然后返回合理的单词
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (isTrue(words[i])) {
      result.push(words[i]);
    }
  }
  return result;
};

export { findWords };
