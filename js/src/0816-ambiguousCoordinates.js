/*
 * @lc app=leetcode.cn id=816 lang=javascript
 *
 * [816] 模糊坐标
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
// 92 ms, 在所有 JavaScript 提交中击败了100.00%
function ambiguousCoordinates(s) {
  // 1、字符串是二维坐标，数字部分获取，然后分割成两部分，分别是坐标
  const numStr = s.slice(1, s.length - 1);

  // 辅助函数：判断一个字符串是否满足
  const check = (str) => {
    // todo 写入临时的对象中，减少再次查询
    return String(Number(str)) === str;
  };

  // 辅助函数：把子一个数字字符串中间加上小数点，然后输出合法的数字
  const getArray = (str) => {
    const result = [];
    for (let i = 1; i < str.length; i++) {
      const item = `${str.slice(0, i)}.${str.slice(i)}`;
      if (check(item)) {
        result.push(item);
      }
    }
    if (check(str)) result.push(str);
    return result;
  };

  // 2、然后左边坐标中间加一个小数点，然后判断当前的数值是否满足；构成一个数组；右边的加一个小数点，也判断是否满足。
  const res = [];
  // 3、两个数组循环一下，乘法获取结果
  for (let i = 1; i < numStr.length; i++) {
    const leftNumStr = numStr.slice(0, i);
    const rightNumStr = numStr.slice(i);
    const leftArr = getArray(leftNumStr);
    const rightArr = getArray(rightNumStr);
    // 把两个数组格式化一下，组合起来
    leftArr.forEach((item1) => {
      rightArr.forEach((item2) => {
        res.push(`(${item1}, ${item2})`);
      });
    });
  }
  return res;
}

export { ambiguousCoordinates };
