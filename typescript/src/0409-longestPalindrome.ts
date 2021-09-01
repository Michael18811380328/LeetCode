// 最长回文串：判断一个字符串，随机排列，可以组成最长的回文字符串的长度
function longestPalindrome(s: string): number {
  const len: number = s.length;
  // 长度是0或者1的情况
  if (len < 2) {
    return len;
  }
  // 104 ms, 在所有 TypeScript 提交中击败了47.83%
  // 获取字符出现的次数
  let dict:object = [];
  for (let i: number = 0; i < len; i++) {
    let key: string = s[i];
    if (!dict[key]) {
      dict[key] = 1;
    } else {
      dict[key] = dict[key] + 1;
    }
  }
  // 计算回文串长度
  let max: number = 0;
  let hasMiddle:boolean = false;
  let key: string;
  for (key in dict) {
    let times: number = dict[key];
    if (times % 2 === 0) {
      max += times;
    } else  {
      max += (times - 1);
      hasMiddle = true;
    }
  }
  // 如果中间有值，增加一个长度
  if (hasMiddle) max++;
  return max;
};

export {longestPalindrome};
