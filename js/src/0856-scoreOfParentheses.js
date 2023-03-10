/**
 * @param {string} s
 * @return {number}
 */
const scoreOfParentheses = function(s) {
  // 初始化栈，当前结果是0
  const stack = [0];
  // 循环字符串
  for (let i = 0; i < s.length; i++) {
    // 如果是左括号，推入一个0
    if (s[i] === '(') {
      stack.push(0);
    }
    // 如果是右括号
    else if (s[i] === ')') {
      // 弹出上一个数字
      const tmp = stack.pop();
      // 求出这对括号的值（2的倍数，或者是1）——这个需要注意
      const sum = Math.max(tmp * 2, 1);
      // 当前的计算结果相加
      stack[stack.length - 1] = stack[stack.length - 1] + sum;
    }
  }
  // 返回全部计算结果
  return stack[0];
};

// console.log(scoreOfParentheses("()()")) //2
// console.log(scoreOfParentheses("(())")) //2
// console.log(scoreOfParentheses("()")) //1
// console.log(scoreOfParentheses("(()(()))")) // 6
// console.log(scoreOfParentheses("(()(()))()()()()()")) //11
// console.log(scoreOfParentheses("(()(()))()(())()()()((()()))")) //20

export { scoreOfParentheses };
