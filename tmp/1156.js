// 1、计算当前字符串中每一个字符出现的次数，出现最大的次数
// 2、从最大次数开始循环，作为窗口的长度，依次减少
// 3、当窗口是N时
// 3.1 计算初始化窗口：如果某字符串个数等于N，那么直接返回N；如果个数等于N-1，并且总数大于等于N，那么也返回N
// 3.2 开始滑动窗口：每次滑动，减去开始的一个字符，加上后面的一个字符：如果某字符串个数等于N，那么直接返回N；如果个数等于N-1，并且总数大于等于N，那么也返回N

/**
 * 单字符重复子串的最大长度，思路：滑动窗口+字典
 * https://leetcode.cn/problems/swap-for-longest-repeated-character-substring/description/?envType=problem-list-v2&envId=string
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {


  // 1、全部字符串循环一次，获取全部的字符串的个数 dict（n），找到出现最多的字符串
  let dict = {};
  let max = 1;
  for (let i = 0; i < text.length; i++) {
    const key = text[i];
    if (!dict[key]) {
      dict[key] = 1;
    } else {
      dict[key] = dict[key] + 1;
    }
    if (dict[key] > max) {
      max = dict[key];
    }
  }



  if (max === 1) {
    return 1;
  }



  // 2、从最大值开始，滑动窗口，依次增加减少字符串个数，更新字典
  for (let currMax = max; currMax > 0; currMax--) {

    // 初始化当前窗口的字典
    let currDict = null;
    currDict = {};

    for (let j = 0; j < currMax - 1; j++) {
      const key = text[j];
      if (!currDict[key]) {
        currDict[key] = 1;
      } else {
        currDict[key] = currDict[key] + 1;
      }
      // 如果当前窗口内全部的都相同，返回
      if (currDict[key] === currMax) {
        return currMax;
      }
      // 如果初始化窗口的最大值是 i - 1，且后面还有1个相同字符串，满足条件，返回这个最大值
      if (currDict[key] === currMax - 1 && dict[key] >= currMax) {
        return currMax;
      }
    }
    console.log(62, currMax)
    // 开始滑动窗口
    for (let j = currMax; j < text.length; j++) {
      let start = text[j - currMax];
      let end = text[j];
      currDict[start] = currDict[start] - 1;
      if (!currDict[end]) {
        currDict[end] = 1;
      } else {
        currDict[end] = currDict[end] + 1;
      }
      console.log(j, j - currMax, JSON.stringify(currDict));
      if (currDict[end] === currMax) {
        return currMax;
      }
      // 如果当前窗口中存在了 i - 1 个字符串，那么就通过移动1个形成满足的字符串
    
      if (currDict[end] === currMax - 1 && dict[end] >= currMax) {
        // console.log(currMax, JSON.stringify(currDict), currDict[end], dict[end])
        return currMax;
      }
    }
  }
  return 1;
};




console.log(
  maxRepOpt1("ababa")
  // maxRepOpt1("ababa") === 3,
  // maxRepOpt1("aaabaaa") === 6,
  // maxRepOpt1("aaaaa") === 5,
  // maxRepOpt1("abcdefg") === 1,
  // maxRepOpt1("aaabbaaa") === 4,
);

// 理论上没问题，就是边界条件处理不对
