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
const originalDigits = function(s) {
  const dict = {};
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const key = s[i];
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
  const zero = dict.z || 0;
  const two = dict.w || 0;
  const six = dict.x || 0;
  const eight = dict.g || 0;

  // three h
  // seven s
  const three = (dict.h || 0) - eight;
  const seven = (dict.s || 0) - six;

  // ten t
  // five v
  // four f
  // one o
  // nine
  const ten = (dict.t || 0) - two - eight - three;
  const five = (dict.v || 0) - seven;
  const four = (dict.f || 0) - five;
  const one = (dict.o || 0) - zero - two - four;
  const nine = ((dict.n || 0) - seven - ten - one) / 2;

  const res = `${'0'.repeat(zero)}${'1'.repeat(one)}${'2'.repeat(two)}${'3'.repeat(three)}${'4'.repeat(four)}${'5'.repeat(five)}${'6'.repeat(six)}${'7'.repeat(seven)}${'8'.repeat(eight)}${'9'.repeat(nine)}`;
  return res;
};

// @lc code=end
