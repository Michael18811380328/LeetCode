
var isInterleave = function(s1, s2, s3) {
  // 如果长度不等，那么一定不满足条件，这个判断一次即可
  if ((s1.length + s2.length) !== s3.length) {
    return false;
  }
  // '' 'abc' 'abc' 其中有一个是空字符串，或者三个都是空字符串，直接判断是否相等
  if (s1.length === 0) {
    return s2 === s3;
  }
  if (s2.length === 0) {
    return s1 === s3;
  }
  
  // 使用辅助函数实现
  // 改成指针，不要使用字符串的截取方法，容易超时
  function fn(p1, p2, p3) {
    // console.log(p1, p2, p3);
    // 如果有一个已经是空字符串，那么直接比较另两个即可
    if (!s1[p1]) {
      // console.log(s2.slice(p2), s3.slice(p3))
      return s2.slice(p2) === s3.slice(p3);
    }
    if (!s2[p2]) {
      // console.log(s1.slice(p1), s3.slice(p3))
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
    // 是否还有其他特殊情况？
  }

  return fn(0, 0, 0);
};

console.log(isInterleave('abc', 'abc', 'aabbcc') === true);
console.log(isInterleave('trans', 'abc', 'abctrans') === true);

// 这里例子会超时
// 就算指针的情况，现在子函数运行 25w 次，性能太差
// 这种思维还是 DFS 的思路，不是动态规划的思路
let a = "abababababababababababababababababababababababababababababababababababababababababababababababababbb"
let b = "babababababababababababababababababababababababababababababababababababababababababababababababaaaba"
let c = "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb"

console.log(isInterleave(a, b, c) === false);

