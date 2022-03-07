/*
 * @lc app=leetcode.cn id=1189 lang=javascript
 *
 * [1189] “气球” 的最大数量
 */

//
/**
 * @param {string} text
 * @return {number}
 */
// balloon
const maxNumberOfBalloons = function(text) {
  const len = text.length;
  if (len < 7) return 0;
  let b = 0;
  let a = 0;
  let l = 0;
  let o = 0;
  let n = 0;
  for (let i = 0; i < len; i++) {
    const item = text[i];
    switch (item) {
      case 'b':
        b++;
        break;
      case 'a':
        a++;
        break;
      case 'l':
        l++;
        break;
      case 'o':
        o++;
        break;
      case 'n':
        n++;
        break;
      default:
        break;
    }
  }
  return Math.min(b, a, n, Math.floor(o / 2), Math.floor(l / 2));
};
