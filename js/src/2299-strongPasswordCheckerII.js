/*
 * @lc app=leetcode.cn id=2299 lang=javascript
 *
 * [2299] 强密码检验器 II
 */

// @lc code=start
/**
 * @param {string} password
 * @return {boolean}
 */
// 最好使用正则表达式一起验证
const strongPasswordCheckerII = function(password) {
  //  它有至少 8 个字符。
  if (password.length < 8) {
    return false;
  }
  //  至少包含 一个小写英文 字母。
  if (!/[a-z]/.test(password)) {
    return false;
  }
  //  至少包含 一个大写英文 字母。
  if (!/[A-Z]/.test(password)) {
    return false;
  }
  //  至少包含 一个数字 。
  if (!/[0-9]/.test(password)) {
    return false;
  }
  //  至少包含 一个特殊字符 。特殊字符为："!@#$%^&*()-+" 中的一个。
  // 注意：这里需要转义 + - 特殊符号
  if (!/[!@#$%^&*()\-\+]/.test(password)) {
    return false;
  }
  // 它不包含 2 个连续相同的字符
  if (/(.)(\1)+/.test(password)) {
    return false;
  }
  return true;
};

// console.log(strongPasswordCheckerII("IloveLe3tcode!"));
// console.log(strongPasswordCheckerII("Me+You--IsMyDream"));
// console.log(strongPasswordCheckerII("+Aa1a1a1"));
// @lc code=end
export { strongPasswordCheckerII };
