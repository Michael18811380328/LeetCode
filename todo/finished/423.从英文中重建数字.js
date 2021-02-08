/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// Your runtime beats 50 % of javascript submissions
var originalDigits = function(s) {
  let dict = {};
  const len = s.length;
  for (let i = 0; i < len; i++) {
    let key = s[i];
    if (dict[key]) {
      dict[key]++;
    } else {
      dict[key] = 1;
    }
  }

  // zero z
  // two w
  // six x
  // eigth g
  let zero = dict['z'] || 0;
  let two = dict['w'] || 0;
  let six = dict['x'] || 0;
  let eight = dict['g']  || 0;

  // three h
  // seven s
  let three = (dict['h'] || 0) - eight;
  let seven = (dict['s'] || 0) - six;

  // ten t
  // five v
  // four f
  // one o
  // nine 
  let ten = (dict['t'] || 0) - two - eight - three;
  let five = (dict['v'] || 0) - seven;
  let four = (dict['f'] || 0) - five;
  let one = (dict['o'] || 0) - zero - two - four;
  let nine = ((dict['n'] || 0) - seven - ten - one) / 2;

  let res = '' + '0'.repeat(zero) + '1'.repeat(one) + '2'.repeat(two) + '3'.repeat(three) + '4'.repeat(four) + '5'.repeat(five) + '6'.repeat(six) + '7'.repeat(seven) + '8'.repeat(eight) + '9'.repeat(nine);
  return res;
};

// @lc code=end

