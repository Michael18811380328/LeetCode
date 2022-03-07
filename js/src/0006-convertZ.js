/**
 * [6] Z 字形变换
 * @lc app=leetcode.cn id=6 lang=javascript
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  // 注意处理 num是1-2的情况
  if (numRows === 1) return s;
  // 建一个对象，设置不同的键，然后每一个numRows是空字符串
  const dict = {};
  for (let key = 1; key <= numRows; key++) {
    dict[key] = '';
  }
  // 如果当前的序号是 0 或者是 numRows.length - 1
  let current = 1;
  let direction = true;
  for (let i = 0; i < s.length; i++) {
    // 获取当前的字符串，并加入到字典中
    const item = s[i];
    dict[current] = dict[current] + item;
    // 当循环到第一个或者最后一个，换向
    if (current === numRows) {
      direction = false;
    } else if (current === 1) {
      direction = true;
    }
    // 当前的序号增加或者减少
    if (direction) {
      current++;
    } else {
      current--;
    }
  }
  let result = '';
  for (let i = 1; i <= numRows; i++) {
    const item = dict[i];
    result += item;
  }
  return result;
  // 然后遍历完，把对应的字符串从对象中拿出
  // 然后再拼接成新的字符串
};

export { convert };
