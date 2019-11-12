// 22 括号生成
// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
/**
例如，给出 n = 3，生成结果为：（考点：回溯算法）注意：n表示括号的对数；
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */

// 思路：创建一个数组，循环n次，每次可以向不同的数组中增加一对括号
// 前半个括号是 1 后半个括号是 -1 那么数组的结果必须是大于0
// 有 n 个 1, n 个 -1 组成一个 2n 的数组，有多少个情况？
/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis() {
  return null;
}

export default generateParenthesis;


// test-22 generate
// test('generate Parenthesis', () => {
//   const arr = [
//     '((()))',
//     '(()())',
//     '(())()',
//     '()(())',
//     '()()()',
//   ];
//   expect($.generateParenthesis(3)).toEqual(arr);
//   // return null
// });
