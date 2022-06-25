/*
 * @lc app=leetcode.cn id=2224 lang=javascript
 *
 * [2224] 转化时间需要的最少操作数
 */

// @lc code=start
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
const convertTime = function(current, correct) {
  const arr1 = current.split(':').map((item) => parseInt(item));
  const arr2 = correct.split(':').map((item) => parseInt(item));
  let res = 0;
  // handle minutes "09:41" "10:34"
  if (arr2[1] < arr1[1]) {
    arr2[1] = arr2[1] + 60;
    arr2[0] = arr2[0] - 1;
  }
  res = arr2[0] - arr1[0];
  let minutes = arr2[1] - arr1[1];

  if (minutes >= 15) {
    res += Math.floor(minutes / 15);
    minutes = minutes - Math.floor(minutes / 15) * 15;
  }

  if (minutes >= 5) {
    res += Math.floor(minutes / 5);
    minutes = minutes - Math.floor(minutes / 5) * 5;
  }

  res += minutes;
  return res;
};
// @lc code=end

export { convertTime };
