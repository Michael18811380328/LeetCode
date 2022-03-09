/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
// 关键：结果可能是整数，小数，有限循环小数
// 假设不可能是无限不循环小数
// 关键是计算循环小数的部分
// 计算余数时，如果已经出现过，那么就是循环小数
var fractionToDecimal = function(numerator, denominator) {
  // 存放不同位数的结果
  let result = [];
  // 0、处理被除数是 0 的情况
  if (numerator === 0) {
    return "0";
  }
  // 1、计算正负号
  if (numerator > 0 && denominator < 0 || numerator < 0 && denominator > 0) {
    result.push('-');
  }
  // 2、计算整数部分
  let A = Math.abs(numerator);
  let B = Math.abs(denominator);
  result.push(Math.floor(A / B));
  // 如果没有小数，直接返回
  if (A % B === 0) {
    return result.join('');
  }
  // 如果有小数，先加入小数点
  result.push('.');
  // 依次计算余数，然后把余数记录到字典中
  // 如果某个时刻余数是0，或者余数中重复了，结束
  let tmpDict = new Map();
  let tmpArr = [];
  let remain = A % B;
  let index = 0;
  // 这个是关键，需要把每一个余数出现的位置，都记录在字典中
  // 这样便于最后找到循环的部分（刚开始只记录了 true 没有记录索引）

  // 保证 答案字符串的长度小于10000，这里不会死循环
  // 循环内部实现的步骤仔细理一下
  while (remain !== 0 && !tmpDict.has(remain)) {
    tmpDict.set(remain, index);
    remain = remain * 10;
    tmpArr.push(Math.floor(remain / B));
    remain = remain % B;
    index++;
  }
  // 如果余数是0，那么是不循环小数
  if (remain === 0) {
    result = result.concat(tmpArr);
    return result.join('');
  }
  // console.log(tmpDict, tmpArr, remain);
  // 如果出现重复，那么是循环的小数
  else if (remain !== 0) {
    // 先找到这个循环开始的位置，然后加一个括号
    let newIndex = tmpDict.get(remain);
    tmpArr.splice(newIndex, 0, '(');
    tmpArr.push(')');
    result = result.concat(tmpArr);
    return result.join('');
  }
};

console.log(fractionToDecimal(1, 2) === "0.5");
console.log(fractionToDecimal(2, 1) === "2");
console.log(fractionToDecimal(2, 3) === "0.(6)");
console.log(fractionToDecimal(1, 5) === "0.2");
console.log(fractionToDecimal(1, 5) === "0.2");
console.log(fractionToDecimal(35, 20) === "1.75");
console.log(fractionToDecimal(4, 333) === "0.(012)");
console.log(fractionToDecimal(821, 370) === "2.2(189)");
// @lc code=end

