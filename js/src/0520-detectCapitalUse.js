// 给定一个单词，你需要判断单词的大写使用是否正确。
// 我们定义，在以下情况时，单词的大写用法是正确的：
// 全部字母都是大写，比如"USA"。
// 单词中所有字母都不是大写，比如"leetcode"。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
// 否则，我们定义这个单词没有正确使用大写字母。

// 示例 1:
// 输入: "USA"
// 输出: True
// 示例 2:
// 输入: "FlaG"
// 输出: False

const isLarge = function(str) {
  const index = str.charCodeAt(0);
  if (index > 64 && index < 91) {
    return true;
  } else if (index > 96 && index < 123) {
    return false;
  }
  return null;
};

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function(word) {
  const len = word.length;
  // 如果长度是1，始终是正确的
  if (len <= 1) return true;
  const firstStr = word[0];
  const isFirstLarge = isLarge(firstStr);

  if (isFirstLarge) {
    // 如首字母大写，长度是2，那么就是正确的
    if (len === 2) return true;
    // 第一个是大写（循环后面的，必须都是大写或者都是小写才行）
    const isSecondLarge = isLarge(word[1]);
    for (let i = 1; i < len; i++) {
      if (isLarge(word[i]) !== isSecondLarge) return false;
    }
    return true;
  } else {
    // 第一个是小写（循环后面的，必须都是小写才行）
    for (let i = 1; i < len; i++) {
      if (isLarge(word[i])) return false;
    }
    return true;
  }
};

export { isLarge, detectCapitalUse };
