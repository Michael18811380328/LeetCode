/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
// Your runtime beats 92.77 % of javascript submissions
const numUniqueEmails = function(emails) {
  // 循环邮件
  const len = emails.length;
  const dict = {};
  let times = 0;
  for (let i = 0; i < len; i++) {
    const item = valid(emails[i]);
    // console.log(item);
    // 然后放在对象中，用另一个int记录次数
    if (!dict[item]) {
      times++;
      dict[item] = true;
    }
  }
  return times;
};

// 先规范邮件地址
const valid = (email) => {
  const seperator = email.indexOf('@');
  let local = email.slice(0, seperator);
  const domain = email.slice(seperator);
  if (local.indexOf('+') > -1) {
    local = local.slice(0, local.indexOf('+'));
  }
  local = local.replace(/\./g, '');
  return local + domain;
};
// @lc code=end
