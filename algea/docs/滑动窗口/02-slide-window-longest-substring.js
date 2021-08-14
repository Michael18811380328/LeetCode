// 求字符串中最长的无重复字符的子字符串

// 思路：创建一个字典，存放当前字母出现的位置；创建一个 start 存放无重复子串的位置
// 循环字符串，然后判断字典中是否出现。如果出现，那么改变 start，同时更新字典中出现的位置
// 每次计算当前值和开始值的差，然后得出当前子串的长度
// 最后计算字符串的长度减去开始的长度，看一下最大值
let fn = (str) => {
  const len = str.length;
  if (len === 1) {
    return 1;
  } 
  let dict = {};
  let start = 0;
  dict[str[0]] = 0;
  let max = 1;
  // 开始从第二个判断
  for (let i = 1; i < len; i++) {
    // 存在相同的元素（更新开始的位置）
    if (dict[str[i]] > -1) {
      start = dict[str[i]] + 1;
      dict[str[i]] = i;
    }
    // 不存在相同的元素
    else {
      dict[str[i]] = i;
    }
    // 每次循环，计算最长的索引，长度是索引的差值 + 1
    let currentMax = i - start + 1;
    if (currentMax > max) {
      max = currentMax;
    }
  }
  return max;
};

// 输入: “abcabcbb”
// 输出: 3
// 解释: 因为无重复字符的最长子串是 “abc”，所以其长度为 3。

// 输入: “bbbbb”
// 输出: 1
// 解释: 因为无重复字符的最长子串是 “b”，所以其长度为 1。

// 输入: “pwwkew”
// 输出: 3
// 解释: 因为无重复字符的最长子串是 “wke”，所以其长度为 3。
// 请注意，你的答案必须是 子串 的长度，“pwke” 是一个子序列，不是子串。

console.log(fn('abcabcbb'), fn('bbbbb'), fn('pwwkew'));
