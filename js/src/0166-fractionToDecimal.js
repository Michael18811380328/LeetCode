/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
// 关键：结果可能是整数，小数，有限循环小数
// 根据数学定律：将分数转成整数或小数，做法是计算分子和分母相除的结果。可能的结果有三种：整数、有限小数、无限循环小数。
// 关键是计算循环小数的部分（这是问题的关键）
// 计算余数时，如果已经出现过，那么就是循环小数
// 所以，循环计算小数时，需要把余数记录在哈希表中，如果出现同样的余数
// 那么就说明是无限循环小数
// Your runtime beats 45.03 % of javascript submissions
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
  // 如果有小数，先加上小数点
  result.push('.');
  
  // 依次计算余数，然后把余数记录到字典中
  // 如果某个时刻余数是0，或者余数中重复了，结束
  let tmpDict = {};
  let tmpArr = [];
  let indexArr = [];
  let remain = A - Math.floor(A / B) * B;
  remain = remain * 10;
  // 保证 答案字符串的长度小于10000，这里不会死循环
  while (remain !== 0 && !tmpDict[remain]) {
    tmpDict[remain] = true;
    tmpArr.push(Math.floor(remain / B));
    indexArr.push(remain);
    remain = remain - Math.floor(remain / B) * B;
    remain = remain * 10;
  }

  // 不是循环的小数
  if (remain === 0) {
    result = result.concat(tmpArr);
    return result.join('');
  }

  // 是循环的小数
  // tmpArr 这个不正确
  if (tmpDict[remain]) {
    // 先找到这个循环开始的位置，然后加一个括号
    let index = indexArr.indexOf(remain);
    tmpArr.splice(index, 0, '(');
    tmpArr.push(')');
    result = result.concat(tmpArr);
    return result.join('');
  }
  return result.join('');
};

export { fractionToDecimal };
