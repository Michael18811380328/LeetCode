// * 97. 交错字符串（中等-困难）
// * 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

/**
 * 思路1，双指针：DFS 的思路，时间复杂度 O(2^n)，性能不好
 * 4072 ms, 在所有 JavaScript 提交中击败了5.02%
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  // 如果长度不等，那么一定不满足条件，这个判断一次即可
  if ((s1.length + s2.length) !== s3.length) {
    return false;
  }
  if (s1.length === 0) {
    return s2 === s3;
  }
  if (s2.length === 0) {
    return s1 === s3;
  }
  // 辅助函数：判断两个字符串，包含的字符和数字是否相等，先避免字符不等的情况
  // 字符串的长度是100，这里循环最多400次，性能可以接受
  // 如果是不等的字符，不会执行到下面的递归中，尽量优化性能
  function checkStr(str, str2) {
    let dict = {};
    let len = str.length;
    for (let i = 0; i < len; i++) {
      let key = str[i];
      if (!dict[key]) {
        dict[key] = 0;
      }
      dict[key]++;
    }
    if (str2) {
      let len = str2.length;
      for (let i = 0; i < len; i++) {
        let key = str2[i];
        if (!dict[key]) {
          dict[key] = 0;
        }
        dict[key]++;
      }
    }
    return dict;
  }
  let dict1 = checkStr(s1, s2);
  let dict2 = checkStr(s3);
  for (let key in dict1) {
    if (dict2[key] !== dict1[key]) {
      return false;
    }
  }

  // 辅助函数递归字符串（双指针，递归字符串是否满足）
  function fn(p1, p2, p3) {
    console.log(p1, p2, p3);
    // 如果有一个已经是空字符串，那么直接比较另两个即可
    if (!s1[p1]) {
      return s2.slice(p2) === s3.slice(p3);
    }
    if (!s2[p2]) {
      return s1.slice(p1) === s3.slice(p3);
    }
    // 首先获取三个字符串开始的字符
    let a1 = s1[p1];
    let a2 = s2[p2];
    let a3 = s3[p3];
    // 如果第三个和前两个都不相等，那么就不满足
    if (a3 !== a1 && a3 !== a2) {
      return false;
    }
    // 如果第三个和前两个之一满足，那么获取子字符串（使用指针）
    if (a1 === a3 && a2 !== a3) {
      return fn(p1 + 1, p2, p3 + 1);
    }
    if (a1 !== a3 && a2 === a3) {
      return fn(p1, p2 + 1, p3 + 1);
    }
    // 如果第三个和前两个都满足，那么就是 fn = fn(n - 1) + fn(n - 2) 递归实现？
    if (a1 === a3 && a2 === a3) {
      return fn(p1, p2 + 1, p3 + 1) || fn(p1 + 1, p2, p3 + 1);
    }
  }
  return fn(0, 0, 0);
};

// 思路二：官方解答：动态规划+滚动数组（优化空间复杂度）
// https://leetcode-cn.com/problems/interleaving-string/solution/jiao-cuo-zi-fu-chuan-by-leetcode-solution/
// 实际上就是一个递推式：
// |s3| = |s1| + |s2| 的前提是 s3[s3.length - 1] = s1[s1.length - 1] && |s3-1| = |s1-1| + |s2|
// 官方给的动态规划转移方程
// f(i,j) = [f(i−1,j) and s1(i−1)=s3(p)] or [f(i,j−1) and s2(j−1)=s3(p)]
// 76 ms, 在所有 JavaScript 提交中击败了60.50%
var isInterleave2 = function(s1, s2, s3) {
  let l1 = s1.length;
  let l2 = s2.length;
  let l3 = s3.length;
  if (l1 + l2 !== l3) {
    return false;
  }
  // 这个矩阵存放动态规划的结果
  let arr = new Array(l1 + 1).fill(true);
  let matrix = arr.map(() => {
    return new Array(l2 + 1).fill(true);
  });
  // 先处理首行首列
  const len = matrix.length;
  for (let i = 1; i < len; i++) {
    matrix[i][0] = matrix[i - 1][0] && s3[i - 1] === s1[i - 1];
  }
  for (let j = 1; j < matrix[0].length; j++) {
    matrix[0][j] = matrix[0][j - 1] && s3[j - 1] === s2[j - 1];
  }
  // 处理矩阵内部
  for (let i = 1; i < len; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      // f(i,j) = [f(i−1,j) and s1(i−1)=s3(p)] or [f(i,j−1) and s2(j−1)=s3(p)]
      matrix[i][j] = matrix[i - 1][j] && s3[i + j - 1] === s1[i - 1] || matrix[i][j - 1] && s3[i + j - 1] === s2[j - 1];
    }
  }
  return matrix[l1][l2];
}

// 思路3：回溯算法+指针+字典
// 68 ms, 在所有 JavaScript 提交中击败了84.93%
var isInterleave3 = function (s1, s2, s3) {
  let l1 = s1.length;
  let l2 = s2.length;
  let l3 = s3.length;
  if (l1 + l2 !== l3) {
    return false;
  }
  let dict = new Set();
  let res = false;
  function backtrace(i1, i2, i3) {
    console.log(i1, i2, i3)
    // 当三个指针都到字符串末尾，证明完全匹配，返回
    if (i1 === l1 && i2 === l2 && i3 === l3) {
      return res = true;
    }
    // 如果字典中已经遍历过，直接返回
    if (dict.has(`${i1}-${i2}-${i3}`)) {
      return false;
    }
    dict.add(`${i1}-${i2}-${i3}`);
    if (s1[i1] === s3[i3]) {
      backtrace(i1 + 1, i2, i3 + 1);
    }
    // 注：这里是两种情况，不能用 else if 
    if (s2[i2] === s3[i3]) {
      backtrace(i1, i2 + 1, i3 + 1);
    }
  }
  backtrace(0, 0, 0);
  return res;
};

export { isInterleave, isInterleave2, isInterleave3 };
