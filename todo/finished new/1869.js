/**
 * @param {string} s
 * @return {boolean}
 */
//  100 ms 在所有 JavaScript 提交中击败了15.33%
var checkZeroOnes2 = function(s) {
  // 处理长度是1的情况
  if (s.length === 0) {
    return s === '1';
  }
  let current = s[0];
  let currLen = 1;
  let max1 = 0;
  let max2 = 0;
  const len = s.length;
  for (let i = 1; i < len; i++) {
    if (s[i] === current) {
      currLen++;
    } else {
      // 更新最大长度
      if (current === '1') {
        max1 = Math.max(max1, currLen);
      } else {
        max2 = Math.max(max2, currLen);
      }
      current = s[i];
      currLen = 1;
    }
  }
  // 更新最后一个
  if (current === '1') {
    max1 = Math.max(max1, currLen);
  } else {
    max2 = Math.max(max2, currLen);
  }
  // console.log(max1, max2)
  return max1 > max2;
};

// 改进版
// 92 ms, 在所有 JavaScript 提交中击败了38.67%
var checkZeroOnes = function(s) {
  if (s.length === 0) {
    return s === '1';
  }
  let current = s[0];
  let currLen = 1;
  let max1 = 0;
  let max2 = 0;
  const len = s.length;
  for (let i = 1; i < len; i++) {
    if (s[i] === current) {
      currLen++;
    } else {
      // 更新最大长度
      if (current === '1') {
        if (currLen > max1) {
          max1 = currLen;
        }
      } else {
        if (currLen > max2) {
          max2 = currLen;
        }
      }
      current = s[i];
      currLen = 1;
    }
    // 增加预判
    if (max1 > len / 2) {
      return true;
    }
    if (max2 >= len / 2) {
      return false;
    }
  }
  if (current === '1') {
    if (currLen > max1) {
      max1 = currLen;
    }
  } else {
    if (currLen > max2) {
      max2 = currLen;
    }
  }
  return max1 > max2;
};

// console.log(checkZeroOnes("1101") === true);
// console.log(checkZeroOnes("111000") === false);
// console.log(checkZeroOnes("110100010") === false);
// console.log(checkZeroOnes("1") === true);
// console.log(checkZeroOnes("0") === false);