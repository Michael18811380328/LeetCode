// 367. 有效的完全平方数

/**
 * @param {number} num
 * @return {boolean}
 */
// 88 ms, 在所有 javascript 提交中击败了25.41%
// 思路一：直接循环一次
var isPerfectSquare = function(num) {
  if (num === 0 || num === 1) {
    return true;
  }
  for (let i = 1; i < num; i++) {
    const product = i ** 2;
    if (product === num) {
      return true;
    }
    else if (product > num) {
      return false;
    }
  }
  return false;
};

// 思路二：应该使用二分法求解
// 60 ms, 在所有 javascript 提交中击败了88.67%
var isPerfectSquare2 = function(num) {
  if (num === 0 || num === 1) {
    return true;
  }
  let start = 1;
  let end = Math.ceil(num / 2);
  let middle;
  do {
    middle = Math.ceil((start + end) / 2);
    let product = middle ** 2;
    if (product === num) {
      return true;
    } else if (product < num) {
      start = middle;
    } else if (product > num) {
      end = middle;
    }
  } while (start + 1 < end);
  return false;
};

export { isPerfectSquare, isPerfectSquare2 };
