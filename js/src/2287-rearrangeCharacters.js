/*
 * @lc app=leetcode.cn id=2287 lang=javascript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 * Your runtime beats 31.4 % of javascript submissions
 * 这个题目不难，有几个边界案例需要考虑
 */
const rearrangeCharacters = function(s, target) {
  // 先把两个字符串都遍历转换成对象
  const dict = {};
  for (let i = 0; i < target.length; i++) {
    const key = target[i];
    if (!dict[key]) {
      dict[key] = 1;
    } else {
      dict[key] = dict[key] + 1;
    }
  }

  const dict2 = {};
  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (!dict2[key]) {
      dict2[key] = 1;
    } else {
      dict2[key] = dict2[key] + 1;
    }
  }
  // 遍历对象的键，看一下每一个倍数，然后求最小值
  const res = [];
  for (const key in dict) {
    const value1 = dict[key];
    const value2 = dict2[key];
    if (value2) {
      res.push(Math.floor(value2 / value1));
    } else {
      return 0;
    }
  }
  return Math.min(...res);
};

// console.log(rearrangeCharacters("ilovecodingonleetcode", "code") === 2)
// console.log(rearrangeCharacters("abcba", "abc") === 1)
// console.log(rearrangeCharacters("abbaccaddaeea", "aaaaa") === 1)
// console.log(rearrangeCharacters("lrnvlcqukanpdnluowenfxquitzryponxsikhciohyostvmkapkfpglzikitwiraqgchxnpryhwpuwpozacjhmwhjvslprqlnxrk", "woijih") === 2);
// console.log(rearrangeCharacters("abc", "abcd") === 0)
// console.log(rearrangeCharacters("aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaa") === 2)
export { rearrangeCharacters };

// @lc code=end
