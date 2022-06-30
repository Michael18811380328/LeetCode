/*
 * @lc app=leetcode.cn id=726 lang=javascript
 *
 * [726] 原子的数量
 */

// @lc code=start
/**
 * @param {string} formula
 * @return {string}
 */
// Your runtime beats 70.59 % of javascript submissions
// 辅助函数 判断大写小写和数字
// ASCII在 65-90 之间是大写,97-122 是小写
const isLarge = (str) => {
  const index = str.charCodeAt(0);
  return index >= 65 && index <= 90;
};

const isSmall = (str) => {
  const index = str.charCodeAt(0);
  return index >= 97 && index <= 122;
};

const isNumber = (str) => {
  return Number.isNaN(parseInt(str)) === false;
};

// 辅助函数：计算某个简单字符串的元素(不含括号) 测试通过
const getElementObj = (str) => {
  const dict = {};
  let item = null;
  let times = null;
  while (str.length > 0) {
    const cur = str[0];
    if (isLarge(cur)) {
      // 如果已经有 item，那么先计算上一次的情况
      if (item) {
        times = times || 1;
        if (dict[item]) {
          dict[item] = dict[item] + times;
        } else {
          dict[item] = times;
        }
        item = cur;
        times = null;
      }
      // 如果没有 item，那么直接计算下次的情况
      else {
        item = cur;
      }
    }
    // 小写的情况，直接放到item 中
    else if (isSmall(cur)) {
      item += cur;
    }
    // 数字，处理当前的数字
    else {
      const num = parseInt(cur);
      times = times ? times * 10 + num : num;
    }
    // 循环一次，str 减去1
    str = str.slice(1);
  }
  // 最后存在的元素
  if (item) {
    times = times || 1;
    if (dict[item]) {
      dict[item] = dict[item] + times;
    } else {
      dict[item] = times;
    }
  }
  return dict;
};

// 难点：
// 1、获取原子（必须大写字母开头，然后把数字获取到）
// 原子的长度是0或者1，这个可以利用一下
// 2、括号嵌套处理（这个使用递归操作）
// 先找到第一个右括号，然后找到相邻的第一个左括号，找到括号后面的数字
// 使用函数处理这部分值
const countOfAtoms = function(formula) {
  // 当有括号时，先去括号
  while (formula.includes(')')) {
    // 找到第一个右括号
    const rightIndex = formula.indexOf(')');
    // 然后找到左侧的第一个左括号
    const leftIndex = formula.lastIndexOf('(', rightIndex);
    // 把中间的字符剪出来
    const inner = formula.slice(leftIndex + 1, rightIndex);
    // console.log(inner);
    // 然后找到右面的数字（次数）;
    let tmp = formula.slice(rightIndex + 1);
    let times;
    // 去掉括号后，左侧剩余的字符串
    const leftRemain = formula.slice(0, leftIndex);
    // 去掉括号后，右侧剩余的字符串
    let rightRemain = '';
    if (tmp.length > 0) {
      while (isNumber(tmp[0])) {
        times = times ? times * 10 + parseInt(tmp[0]) : parseInt(tmp[0]);
        tmp = tmp.slice(1);
      }
      rightRemain = tmp;
    }
    const innerObj = getElementObj(inner);
    times = parseInt(times);
    // "Mg(H2O)N" times is NaN
    if (!times || Number.isNaN(times)) {
      times = 1;
    }
    let newRemain = '';
    for (const key in innerObj) {
      const value = innerObj[key];
      newRemain = newRemain + key + String(value * times);
    }
    // 把计算结果拼接回去 // 这里注意结束的条件
    // 这里的性能不好，未来可以优化
    formula = leftRemain + newRemain + rightRemain;
  }
  // 这里是已经处理完括号的字符串-基本正确
  const allObj = getElementObj(formula);
  // 先转换成数组，然后排序，然后转换成字符串输出
  const arr = [];
  for (const key in allObj) {
    arr.push(key);
  }
  arr.sort((a, b) => a > b ? 1 : -1);
  let res = '';
  arr.forEach((item) => {
    res = res + item;
    if (allObj[item] > 1) {
      res += allObj[item];
    }
  });
  return res;
};

// 这三个测试通过
// countOfAtoms("(NB3)33");
// countOfAtoms("H2O");
// countOfAtoms("Mg(OH)2");
// countOfAtoms("Mg(H2O)N");
// countOfAtoms("K4(ON(SO3)2)2H2OMg(OH)2Mg(OH)2Mg(OH)2Mg(OH)2Mg(OH)2");
// "(NB3)33"

// @lc code=end

export { countOfAtoms };
