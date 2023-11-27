/*
 * @lc app=leetcode.cn id=402 lang=javascript
 * [402] 移掉K位数字
 */

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
// var removeKdigits = function(num, k) {
//   if (k <= 0) {
//     return num;
//   }
//   if (num.length === k) {
//     return '0';
//   }
//   let res = num;
//   while (k > 0) {
//     res = getMin(res);
//     if (res === '0') {
//       return res;
//     }
//     k--;
//   }
//   return res;
// };

// // 这个函数计算有问题
// var getMin = function(str) {
//   if (str.length < 2) return '0';
//   if (str[1] === '0') {
//     let min = str.slice(2);
//     min = min.replace(/\b(0+)/gi, '');
//     return min;
//   } else {
//     let flag = 0;
//     let current = str[0];
//     for (let i = 1; i < str.length; i++) {
//       if (str[i] > current) {
//         flag = i;
//         current = str[i];
//       } else {
//         const min = str.slice(0, flag - 1) + str.slice(flag, str.length);
//         return min;
//       }
//     }
//   }
//   const min = str.slice(0, flag - 1) + str.slice(flag, str.length);
//   return min;
// };

// // @lc code=end

// // 另一种思路，数字小没问题，数字大就超出限制了
// // @lc code=start
// /**
//  * @param {string} num
//  * @param {number} k
//  * @return {string}
//  */
// var removeKdigits = function(num, k) {
//   if (k <= 0) {
//     return num;
//   }
//   if (num.length === k) {
//     return '0';
//   }
//   let res = num;
//   while (k > 0) {
//     res = getMin(res);
//     if (res === '0') {
//       return res;
//     }
//     k--;
//   }
//   return res;
// };

// var getMin = function(str) {
//   let min = `${str.slice(0, str.length - 1)}`;
//   min = min.replace(/\b(0+)/gi, '');
//   if (min === '') return '0';

//   for (let i = 0; i < str.length; i++) {
//     let item = `${str.slice(0, i)}${str.slice(i + 1, str.length)}`;
//     item = item.replace(/\b(0+)/gi, '');
//     if (item === '') {
//       // 00 去掉全部的后，直接变成0了
//       return '0';
//     }
//     if (!min && min !== 0 || item === min) {
//       min = item;
//     } else {
//       // Infinity Infinity false 很大的数字直接比较错误啊
//       if (Number(item) === Infinity || Number(min) === Infinity) {
//         min = getSmall(item, min);
//       } else {
//         min = Number(item) < Number(min) ? item : min;
//       }
//     }
//   }
//   return min;
// };

// // ab长度相同，直接比较每一个数字即可
// var getSmall = function(a, b) {
//   if (a.length < b.length) {
//     return a;
//   }
//   else if (a.length > b.length) {
//     return b;
//   }
//   for (let i = 0; i < a.length; i++) {
//     if (Number(a[i]) > Number(b[i])) {
//       return b;
//     }
//     else if (Number(a[i]) < Number(b[i])) {
//       return a;
//     }
//   }
//   return a;
// };

// 官方解答
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/remove-k-digits/solutions/484940/yi-diao-kwei-shu-zi-by-leetcode-solution/
const removeKdigits = function(num, k) {
  const stk = [];
  for (const digit of num) {
    while (stk.length > 0 && stk[stk.length - 1] > digit && k) {
      stk.pop();
      k -= 1;
    }
    stk.push(digit);
  }
  for (; k > 0; --k) {
    stk.pop();
  }
  let ans = '';
  let isLeadingZero = true;
  for (const digit of stk) {
    if (isLeadingZero && digit === '0') {
      continue;
    }
    isLeadingZero = false;
    ans += digit;
  }
  return ans === '' ? '0' : ans;
};

export { removeKdigits };
