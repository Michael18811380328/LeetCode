/**
 * @param {string} command
 * @return {string}
 */
// 请你设计一个可以解释字符串 command 的 Goal 解析器 。command 由 "G"、"()" 和/或 "(al)" 按某种顺序组成。
// Goal 解析器会将 "G" 解释为字符串 "G"、"()" 解释为字符串 "o" ，"(al)" 解释为字符串 "al" 。
// 然后，按原顺序将经解释得到的字符串连接成一个字符串。
// 给你字符串 command ，返回 Goal 解析器 对 command 的解释结果。
// 思路一：直接循环 88 ms, 在所有 JavaScript 提交中击败了36.63%
var interpret = function(command) {
  let res = '';
  for (let i = 0; i < command.length; i++) {
    let item = command[i];
    if (item === 'G') {
      res += 'G';
    } else {
      if (command[i + 1] === 'a') {
        res += 'al';
        i += 3;
      } else {
        res += 'o';
        i += 1;
      }
    }
  }
  return res;
};
// 思路二：正则替代
// 76 ms, 在所有 JavaScript 提交中击败了 86.63%
var interpret = function(command) {
  return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};

