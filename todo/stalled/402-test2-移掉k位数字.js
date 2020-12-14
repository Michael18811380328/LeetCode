/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */
// 402 换一个思路：现在需要一次一次循环，性能是很大的问题

// 1、如果第二位是0，那么直接删掉第一位即可（然后去掉前面的0）；

// 2、否则，如果字符串后面向前指针，找到一个数，然后这个数前面的数都比它小，那么删掉这个数试试

// 3、如果多次删除过程中，某一次结果是空，或者是0， 那么直接返回0即可

// 思路基本正常，看一下为什么现在不正确；


// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (k <= 0) {
    return num;
  }
  if (num.length === k) {
    return '0';
  }
  let res = num;
  while (k > 0) {
    res = getMin(res);
      console.log(res);
    if (res === '0') {
      return res;
    }
    k--;
  }
  return res;
};

// 这个函数计算有问题
var getMin = function(str) {
  if (str.length < 2) return '0';
  if (str[1] === '0') {
    let min = str.slice(2);
    min = min.replace(/\b(0+)/gi, "");
    return min;
  } else {
    let flag = 0;
    let current = str[0];
    for (let i = 1; i < str.length; i++) {
      if (str[i] > current) {
        flag = i;
        current = str[i];
      } else {
        let min = str.slice(0, flag - 1) + str.slice(flag, str.length);
        return min;
      }
    }
  }
  let min = str.slice(0, flag - 1) + str.slice(flag, str.length);
  return min;
}

// @lc code=end

