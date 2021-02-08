/*
 * [3] 无重复字符的最长子串
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
// 初步思路：双指针（快慢指针实现）
// 两个指针移动，然后不断判断子序列内部是否重复，然后累计计算当前最长的距离。
// 1、循环获取子串 ——双指针
// 2、如何判断一个子串是否有重复字符？——这个直接IndexOf行不行
// 如果这个方法不好，那么使用对象判断是否重复
function lengthOfLongestSubstring(s) {
  // 辅助函数：true 没有重复字符串
  const checkStr = (str) => {
    const len = str.length;
    for (let i = 0; i < len; i++) {
      const current = str[i];
      if (str.lastIndexOf(current) !== str.indexOf(current)) {
        return false;
      }
    }
    return true;
  };
  const len = s.length;
  // 处理特殊情况（如果长度是0或者是1，那么直接返回长度）
  if (len <= 1) {
    return len;
  }
  // 设置初始值
  let start = 0;
  let end = 1;
  let num = 1;
  // 循环
  while (end <= len - 1) {
    const sub = s.slice(start, end + 1);
    const result = checkStr(sub);
    if (result) {
      // 如果不重复，累积最大值，快指针加一
      end++;
      num = num > sub.length ? num : sub.length;
    } else {
      // 如果重复，重新开始
      if (end === len - 1) {
        return num;
      }
      start++;
      end++;
    }
  }
  return num;
}

// 思路2-有问题
// function lengthOfLongestSubstring2(str) {
//   let i = 0;
//   let maxSubstring = str[i];
//   let currentMaxString = str[i];
//   const position = 0;
//   for (let j = 1; j < str.length; j++) {
//     if (currentMaxString.indexOf(str[j]) >= 0) {
//       i = currentMaxString.indexOf(str[j]) + 1 + position;
//       if (currentMaxString.length > maxSubstring.length) {
//         maxSubstring = currentMaxString;
//       }
//       if (i === j) {
//         currentMaxString = str[j];
//       } else {
//         currentMaxString = str.substring(i, j);
//         str = str.substr(i);
//       }
//       continue;
//     }
//     currentMaxString += str[j];
//     maxSubstring = currentMaxString;
//   }
//   return maxSubstring.length;
// }

export { lengthOfLongestSubstring };
