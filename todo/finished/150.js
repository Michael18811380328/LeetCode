
// 150. 逆波兰表达式求值
// 根据 逆波兰表示法，求表达式的值。

// 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。

//  68 ms
// , 在所有 JavaScript 提交中击败了
// 100.00%
// 的用户

// 说明：

// 整数除法只保留整数部分。
// 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 

// 示例 1：

// 输入: ["2", "1", "+", "3", "*"]
// 输出: 9
// 解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
// 示例 2：

// 输入: ["4", "13", "5", "/", "+"]
// 输出: 6
// 解释: 该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
// 示例 3：

// 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// 输出: 22
// 解释: 
// 该算式转化为常见的中缀算术表达式为：
//   ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22


/**
 * @param {string[]} tokens
 * @return {number}
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // 知识点：栈
    // JS 中使用数组代替栈
    let stack = [];
    let len = tokens.length;
    for (let i = 0; i < len; i++) {
        let isNum = getFn(tokens[i]);
        // 如果符号前两个是数字，那么执行这个结果，将结果放入栈中，然后继续运算
        if (isNum === true) {
            // 现在题目中给定的是字符串的数字，需要进行转换
            stack.push(Number(tokens[i]));
        } else {
            // 如果当前是计算符号，那么返回的是计算函数，求前两个数值的结果，并放在栈中
            let a = stack.pop();
            let b = stack.pop();
            let res = isNum(b, a);
            stack.push(res);
        }
    }
    // 返回栈的第一个数字即可
    return stack[0];
};

// 辅助函数
// 如果是数字，直接返回 true
// 如果是运算符，返回对应的计算函数
var getFn = (str) => {
    if (str === '+') {
        return (a, b) => a + b; 
    }
    else if (str === '-') {
        return (a, b) => a - b; 
    }
    else if (str === '*') {
        return (a, b) => a * b; 
    }
    else if (str === '/') {
        return (a, b) => {
            if (a / b > 0) {
                return Math.floor(a / b);
            } else {
                return Math.ceil(a / b);
            }
        } 
    }
    else {
        return true;
    }
}

// 作者：Michael-An
// 链接：https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/solution/ni-bo-lan-biao-da-shi-qiu-zhi-js-jie-fa-by-michael/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。