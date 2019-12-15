/**
 * @param {string} s
 * @return {number}
 */
// 思路：非负整数（全部的-表示减）
// 空格直接使用replace取代，和运算无关
// 关键处理左括号和右括号，以及括号内部的嵌套（递归？）
// 能否去括号处理？

// 辅助函数，计算字符串加减法 1+2-0+3
function handleArithmetic(str) {
  str = str.replace(/\-\-+/g, '+');
  const arr = str.split('+');
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i].split('-');
    result += (parseInt(item[0], 10) || 0);
    if (item[1]) {
      for (let j = 1; j < item.length; j++) {
        result -= parseInt(item[j], 10);
      }
    }
  }
  return result;
}

// 116 ms, 在所有 javascript 提交中击败了37.25%
// 消耗内存很多
function calculate(s) {
  // 去掉空格
  s = s.replace(/(^\s*)|(\s+)|(\s*$)/g, '');
  // 去掉括号
  while (s.indexOf(')') !== -1) {
    const endPoint = s.indexOf(')');
    const startPoint = s.lastIndexOf('(', endPoint);
    const middle = s.slice(startPoint + 1, endPoint);
    const result = handleArithmetic(middle);
    s = s.slice(0, startPoint) + String(result) + s.slice(endPoint + 1);
  }
  return handleArithmetic(s);
}

export { calculate };
