/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// Your runtime beats 26.42 % of javascript submissions
var toHex = function(num) {
  if (num === 0) {
    return '0';
  }
  else if (num > 0) {
    return get16(num);
  }
  else if (num < 0) {
    return get16plus(num);
  }
};

var get16 = (num) => {
  let arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  let res = [];
  while (num > 0) {
    let remain = num % 16;
    res.unshift(arr[remain]);
    num = (num - remain) / 16;
  }
  return res.join('');
}

var get16plus = (num) => {
  // 去负号，转换成16进制
  let n16 = get16(-num);
  let map = {
    '0': 'f',
    '1': 'e',
    '2': 'd',
    '3': 'c',
    '4': 'b',
    '5': 'a',
    '6': 9,
    '7': 8,
    '8': 7,
    '9': 6,
    'a': 5,
    'b': 4,
    'c': 3,
    'd': 2,
    'e': 1,
    'f': 0
  };
  let subMap = {
    'f': 15,
    'e': 14,
    'd': 13,
    'c': 12,
    'b': 11,
    'a': 10,
  };
  // 然后所有位置取反
  let res = 0;
  for (let i = 0; i < n16.length; i++) {
    let item = map[n16[i]]; // 这个是取补码的结果
    // 然后转换成数字
    item = isNaN(Number(item)) ? subMap[item] : item;
    res = res * 16 + item;
  }
  // console.log(n16);
  // console.log(res);
  res++;
  return get16(res).padStart(8, 'f');
}

// @lc code=end

