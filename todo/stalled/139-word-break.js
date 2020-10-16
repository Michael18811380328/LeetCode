// 139 拆分长单词
// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
// 拆分时可以重复使用字典中的单词。

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 可以使用逆向思路，遍历数组，然后依次indexOf字符串。如果大于-1，那么剪切字符串，直到不大于-1.
// 遍历数组后，判断字符串的长度是否为0.如果在遍历过程中是0，那么就是真的，否则就是假的。
// 可能的问题：数组中第一个是 pen 第二个是 pencake 那么首先减去第一个，结果就是错误的。(的确存在这个情况，现在的解答是错误的)
// 如果出现这样的问题，解决思路是按照数组的长度，首先字典排个序。确保优先检索长字符串
// 长字符串可能不正确： sports 会减掉 sport if
function wordBreak(s, wordDict) {
  // 先把字典从大到小排序
  // wordDict.sort((a, b) => {
  //   return a.length < b.length;
  // });
  for (let i = 0; i < wordDict.length; i++) {
    const item = wordDict[i];
    while (s.indexOf(item) > -1) {
      const index = s.indexOf(item);
      const len = item.length;
      const newString = s.slice(0, index) + s.slice(index + len);
      // console.log(newString);
      s = newString;
    }
    if (s.length === 0) {
      return true;
    }
  }
  // console.log(s);
  if (s.length > 0) {
    return false;
  }
}

// 解答错误

export { wordBreak };
