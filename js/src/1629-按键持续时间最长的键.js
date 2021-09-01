/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
// 96 ms, 在所有 JavaScript 提交中击败了35.07%
var slowestKey = function(releaseTimes, keysPressed) {
  let longTime = releaseTimes[0];
  let longStr = keysPressed[0];
  const n = keysPressed.length;
  for (let i = 1; i < n; i++) {
    let currentTime = releaseTimes[i] - releaseTimes[i - 1];
    if (currentTime > longTime) {
      longTime = currentTime;
      longStr = keysPressed[i];
    }
    else if (currentTime === longTime) {
      let item = keysPressed[i];
      if (longStr.charCodeAt(0) < item.charCodeAt(0)) {
        longStr = item;
      }
    }
  }
  return longStr;
};
// @lc code=end

