/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const getDict = function(words) {
  const len = words.length;
  const dict = {};
  for (let i = 0; i < len; i++) {
    const key = words[i];
    if (dict[key]) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }
  return dict;
};

const checkStr = function (DICT, str, keyLen) {
  const dict = { ...DICT };
  // 把str切割成 keyLen 的长度，然后比较每一个子字符串和字典是否满足
  while (str.length > 0) {
    const key = str.slice(0, keyLen);
    str = str.slice(keyLen);
    if (!dict[key]) {
      // 不存在这个键直接返回
      return false;
    } else {
      // 存在这个键，判断出现的次数
      if (dict[key] > 0) {
        dict[key] = dict[key] - 1;
      } else {
        return false;
      }
    }
  }
  return true;
};

// 740 ms , 在所有 JavaScript 提交中击败了 54.02%
const findSubstring = function(s, words) {
  // 反向思路:获取目标的字符串的长度
  const keyLen = words[0].length;
  const len = words.length * keyLen;
  // 先把目标单词数组转换成一个对象（因为可能重复）
  const dict = getDict(words);
  // 使用的时候复制字典，不能改变原始值
  const res = [];
  // 然后遍历当前的S字符串，获取子字符串
  for (let i = 0; i < s.length; i++) {
    const subStr = s.slice(i, i + len);
    // 判断每一个子字符串是否满足对象要求，如果满足，那么返回当前的index
    if (subStr.length < len) break;
    if (checkStr(dict, subStr, keyLen)) {
      res.push(i);
    }
  }
  return res;
};
