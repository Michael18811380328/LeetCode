/**
 * @param {string[]} words
 * @return {number}
 */

// 318. 最大单词长度乘积
// 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。
// 如果不存在这样的两个单词，返回 0 。
// 链接：https://leetcode-cn.com/problems/maximum-product-of-word-lengths
// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000

// 思路1：基本方法
// 1620 ms, 在所有 JavaScript 提交中击败了15.94%
// 这个方法显然不好
// 判断两个单词是否有公共部分，遍历每一个字符，并获取公共部分，这个性能较差
const maxProduct = function(words) {
  // 1、遍历一次数组，把每一个都转换成对象，包括字符串的长度，内部出现的字符（无重复数组）
  const words1 = words.map((word) => {
    return {
      len: word.length,
      word,
    };
  });

  // 2 把所有的长度都相乘，放在临时数组中
  const tmp = [];
  for (let i = 0; i < words1.length; i++) {
    for (let j = i + 1; j < words1.length; j++) {
      tmp.push({
        len: words1[i].len * words1[j].len,
        word1: words1[i].word,
        word2: words1[j].word,
      });
    }
  }

  // 3、从大到小排列
  tmp.sort((a, b) => {
    return a.len > b.len ? -1 : 1;
  });

  // 这个存放不同单词的出现的次数
  const dict = {};

  // 辅助函数，计算不同单词出现的字母的字典
  function getDict(str) {
    const tmp2 = {};
    for (let i = 0; i < str.length; i++) {
      if (!tmp2[str[i]]) {
        tmp2[str[i]] = true;
      }
    }
    dict[str] = tmp2;
  }

  // 辅助函数：计算两个单词是否有重复的字母
  function checkWords(word1, word2) {
    const obj1 = dict[word1];
    const obj2 = dict[word2];
    for (const key in obj1) {
      if (obj2[key]) {
        return false;
      }
    }
    return true;
  }

  // 4 循环一次，看是否满足，然后返回结果
  for (let i = 0; i < tmp.length; i++) {
    const { word1, word2 } = tmp[i];
    if (!dict[word1]) {
      getDict(word1);
    }
    if (!dict[word2]) {
      getDict(word2);
    }
    if (checkWords(word1, word2)) {
      return tmp[i].len;
    }
  }
  // 5、如果都有重复，那么返回空
  return 0;
};

// 官方给出：位运算
// 如果可以将判断两个单词是否有公共字母的时间复杂度降低到 O(1)O(1)，则可以将总时间复杂度降低到 O(n^2)。可以使用位运算预处理每个单词，通过位运算操作判断两个单词是否有公共字母。由于单词只包含小写字母，共有 2626 个小写字母，因此可以使用位掩码的最低 2626 位分别表示每个字母是否在这个单词中出现。将 \text{a}a 到 \text{z}z 分别记为第 00 个字母到第 2525 个字母，则位掩码的从低到高的第 ii 位是 11 当且仅当第 ii 个字母在这个单词中，其中 0 \le i \le 250≤i≤25。

// 用数组 \textit{masks}masks 记录每个单词的位掩码表示。计算数组 \textit{masks}masks 之后，判断第 ii 个单词和第 jj 个单词是否有公共字母可以通过判断 \textit{masks}[i]~\&~\textit{masks}[j]masks[i] & masks[j] 是否等于 00 实现，当且仅当 \textit{masks}[i]~\&~\textit{masks}[j] = 0masks[i] & masks[j]=0 时第 ii 个单词和第 jj 个单词没有公共字母，此时使用这两个单词的长度乘积更新最大单词长度乘积。

const maxProduct2 = function(words) {
  const length = words.length;
  const masks = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    const word = words[i];
    const wordLength = word.length;
    for (let j = 0; j < wordLength; j++) {
      masks[i] |= 1 << (word[j].charCodeAt() - 'a'.charCodeAt());
    }
  }
  let maxProd = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        maxProd = Math.max(maxProd, words[i].length * words[j].length);
      }
    }
  }
  return maxProd;
};

export { maxProduct, maxProduct2 };
