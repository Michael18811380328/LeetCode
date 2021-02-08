/*
 * @lc app=leetcode.cn id=640 lang=javascript
 *
 * [640] 求解方程
 */

// @lc code=start
/**
 * @param {string} equation
 * @return {string}
 */
// 现在五个测试用例通过
// Your runtime beats 88.64 % of javascript submissions
var solveEquation = function(equation) {
  // 先获取等号，把等号两边字符串取出来（x+5-3+x）
  // 不考虑一个方程中有多个等号的情况（不是方程）
  const index = equation.indexOf('=');
  let left = equation.slice(0, index);
  let right = equation.slice(index + 1);
  // 如果左右开头不是负号，那么给左右加一个负号（避免 2 = -2X）
  if (left[0] !== '-') {
    left = '+' + left;
  }
  if (right[0] !== '-') {
    right = '+' + right;
  }
  // console.log(left, right);

  // 先处理左边
  // 先 split ("+") 变成一个数组
  let leftArr1 = left.split('+');
  // 这个数组存储正数
  let leftArr2 = [];
  // 这个数组存储负数
  let leftArr3 = [];
  // 然后遍历这个数组
  leftArr1.forEach((str) => {
    // 如果某一项 indexOf ('-') 那么再次 split('') 然后把这两个情况分别放入结果数组中
    if (str.includes('-')) {
      let tmp = str.split('-');
      leftArr2.push(tmp.shift());
      leftArr3.push(...tmp);
    } else {
      leftArr2.push(str);
    }
  });
  // 这一步正确
  // console.log(leftArr2);
  // console.log(leftArr3);
  let obj1 = getNumber(leftArr2);
  let obj2 = getNumber(leftArr3);
  // 然后再次遍历这个数组，把常熟项和X的系数分开，存储两个单独的变量


  // 再处理右边
  let leftArr4 = right.split('+');
  let leftArr5 = [];
  let leftArr6 = [];
  leftArr4.forEach((str) => {
    if (str.includes('-')) {
      let tmp = str.split('-');
      leftArr5.push(tmp.shift());
      leftArr6.push(...tmp);
    } else {
      leftArr5.push(str);
    }
  });
  let obj3 = getNumber(leftArr5);
  let obj4 = getNumber(leftArr6);
  // console.log(obj1, obj2, obj3, obj4);
  let a = obj1.a - obj2.a - obj3.a + obj4.a;
  let b = obj1.b - obj2.b - obj3.b + obj4.b;

  // 无解的情况：等号左右没有X，但是有常熟项
  // 无穷解的情况：等号左右没有X，也没有常熟项
  // 解是0，等号左右没有常数项，但是X的系数不同
  if (a === 0 && b === 0) {
    return "Infinite solutions";
  }
  if (a === 0 && b !== 0) {
    return "No solution";
  }
  if (a !== 0 && b === 0) {
    return "x=0";
  }
  // 其他的情况：使用常数项除以X的系数，返回就是X的值
  let times = - (b / a);
  return `x=${times}`;
};

var getNumber = (arr) => {
  let a = 0;
  let b = 0;
  arr.forEach(item => {
    if (item[item.length - 1] === 'x') {
      let num = item.slice(0, item.length - 1);
      if (num.length === 0) {
        num = 1;
      }
      a += Number(num);
    }
    else {
      b += Number(item);
    }
  });
  return {a, b};
}

// test
// const testArr = [
//   "x+5-3+x=6+x-2",
//   "x=x",
//   "2x=x",
//   "2x+3x-6x=x+2",
//   "x=x+2"
// ];
// for (let i = 0; i < testArr.length; i++) {
//   let item = testArr[i];
//   solveEquation(item);
// }

// @lc code=end