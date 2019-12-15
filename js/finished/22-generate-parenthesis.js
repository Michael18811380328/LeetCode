// 22 括号生成
// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
/**
例如，给出 n = 3，生成结果为：（考点：回溯算法）注意：n表示括号的对数；
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */
// 思路：N对括号，那么生成的长度就是2N，可以使用一个循环，每一个的可能是左括号或者右括号。

// 辅助函数：判断当前的情况是否是正确的。
function isValid(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      res++;
    } else {
      res--;
    }
    if (res < 0) {
      return false;
    }
  }
  if (res === 0) {
    return true;
  }
  return false;
}

// 方法一：列举全部的情况，然后过滤一下处理(本地少量测试可以，但是时间复杂度太差，LeetCode超时)
// 这是正向思维
function generateParenthesis(n) {
  const arr = ['('];
  // 把全部的可能性加成一个数组，然后过滤这个字符串数组；
  for (let i = 1; i < 2 * n; i++) {
    const len = arr.length;
    for (let j = 0; j < len; j++) {
      arr[j + len] = `${arr[j]})`;
      arr[j] = `${arr[j]}(`;
    }
  }
  return arr.filter((item) => isValid(item));
}


// 反向思维：首先判断当前结果是否正确，然后再加入到结果数组中，循环2N次
// 92 ms, 在所有 javascript 提交中击败了21.28%，性能不好。当大于N时，需要判断第二层循环，这样不需要后面的过滤
// 辅助函数拆分成两个
function isValid2(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      res++;
    } else {
      res--;
    }
    if (res < 0) {
      return false;
    }
  }
  return true;
}

function isValid3(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      res++;
    } else {
      res--;
    }
  }
  if (res === 0) {
    return true;
  }
  return false;
}

// 主函数
function generateParenthesis2(n) {
  const arr = ['('];
  // 把全部的可能性加成一个数组，然后过滤这个字符串数组；
  for (let i = 1; i < 2 * n; i++) {
    const len = arr.length;
    for (let j = 0; j < len; j++) {
      const lastItem = `${arr[j]})`;
      if (isValid2(lastItem)) {
        arr[j + len] = lastItem;
      }
      const firstItem = `${arr[j]}(`;
      if (isValid2(firstItem)) {
        arr[j] = firstItem;
      }
    }
  }
  return arr.filter((item) => isValid3(item));
}

function isValid4(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      res++;
    } else {
      res--;
    }
  }
  return res;
}

// 思路三：每一次都判断是否合法
// 96 ms, 在所有 javascript 提交中击败了18.02%
function generateParenthesis3(n) {
  const arr = ['('];
  // 前半部分，只要结果大于0
  for (let i = 1; i < n; i++) {
    const len = arr.length;
    for (let j = 0; j < len; j++) {
      const lastItem = `${arr[j]})`;
      if (isValid2(lastItem)) {
        arr[j + len] = lastItem;
      }
      const firstItem = `${arr[j]}(`;
      if (isValid2(firstItem)) {
        arr[j] = firstItem;
      }
    }
  }
  // 后半部分结果小于 2 * n - i
  // 这里可以优化
  for (let i = n; i < 2 * n; i++) {
    const len = arr.length;
    for (let j = 0; j < len; j++) {
      const lastItem = `${arr[j]})`;
      const lastRes = isValid4(lastItem);
      // console.log(lastItem, lastRes, 2 * n - i);
      if (lastRes >= 0 && lastRes < 2 * n - i) {
        arr[j + len] = lastItem;
      }
      const firstItem = `${arr[j]}(`;
      const firstRes = isValid4(firstItem);
      // console.log(firstItem, firstRes, 2 * n - i);
      if (firstRes >= 0 && firstRes < 2 * n - i) {
        arr[j] = firstItem;
      }
    }
  }
  return arr.filter((item) => item.length === 2 * n);
}

export { isValid, generateParenthesis, generateParenthesis2, generateParenthesis3 };
