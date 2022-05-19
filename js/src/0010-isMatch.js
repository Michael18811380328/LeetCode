/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */
// 思路：
// 从左向右匹配比较复杂，从右向左匹配
// 这个是动态规划：F(n)= n && F(n - 1)
// 具体就是：一个字符串是否满足 === 最后一个字符是否满足 && 前面的字串是否满足，然后迭代实现
// 参考链接：https://leetcode.cn/problems/regular-expression-matching/solution/shou-hui-tu-jie-wo-tai-nan-liao-by-hyj8/
// 这个比较难，未来多做几次
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 const isMatch = (s, p) => {
  if (s == null || p == null) {
    return false;
  }

  const sLen = s.length;
  const pLen = p.length;

  const dp = new Array(sLen + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false);
  }

  // 基本情况
  dp[0][0] = true;
  for (let j = 1; j < pLen + 1; j++) {
    if (p[j - 1] == "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // 迭代（动态规划）
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      // 1.如果最后一个字符相等，或者最后一个是通配符. 满足匹配下一个
      if (s[i - 1] === p[j - 1] || p[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      }
      // 2. 如果最后一个是 *，分情况
      else if (p[j - 1] == "*") {
        // 2.1 如果前一位相等，或者是通配符
        if (s[i - 1] === p[j - 2] || p[j - 2] === ".") {
          // 下面三种情况满足一种即可（这里没有考虑到）
          // 这个情况比较复杂
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        }
        // 2.2 如果前一位不相等，呢么等于前面两位的字符串
        else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  // 返回对应的匹配结果
  return dp[sLen][pLen];
};

// @lc code=end











// 10-给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
// s 可能为空，且只包含从 a-z 的小写字母。
// p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

// 删除一个字符串的开头的相同的元素
// function deleteStart(s) {
//   const item = s[0];
//   while (s[0] === item) {
//     s = s.slice(1);
//   }
//   return s;
// }

// 删除一个字符串的某个字符
// function deleteS(s, item) {
//   while (s[0] === item) {
//     s = s.slice(1);
//   }
//   return s;
// }

// 然后循环P
// 如果遇到单个字符，那么减去这个字符，减去S中对应的这个字符
// 如果遇到a* 那么把S中的全部a删除，同时删除a*
// 如果遇到.* 那么直接返回真（匹配全部的情况）

// function isMatch(s, p) {
//   // 没有匹配标准，那么移动符合，返回true
//   if (p === '' || p === '.*') {
//     return true;
//   }
  // while (p.length > 0) {
  //   if (p === '.') {
  //     // 如果P是. 只要S的长度是1，就是真；否则就是假的
  //     return s.length === 1;
  //   } else if (p.length === 1) {
  //     // 如果P的长度是1，并且与S相等，那么返回真
  //     return p === s;
  //   } else if (p[0] === '.' && p[1] === '*') {
  //     p = p.slice(2);
  //     s = deleteStart(s);
  //   } else if (p[1] === '*') {
  //     s = deleteS(s, p[0]);
  //     p = p.slice(2);
  //   } else if ((p[0] === s[0]) || (p[0] === '.' && p[1] !== '*')) {
  //     p = p.slice(1);
  //     s = s.slice(1);
  //   } else {
  //     return false;
  //   }
  // }
//   return s.length === 0;
// }

export { isMatch };
