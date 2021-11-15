/*
 * @lc app=leetcode.cn id=1010 lang=javascript
 *
 * [1010] 总持续时间可被 60 整除的歌曲
 */

// @lc code=start
/**
 * @param {number[]} time
 * @return {number}
 */
// 两个思路
// 思路一：双重循环，时间复杂度是 N * 2
// 数组总长度是 10 ^ 5，这个可以算出来，性能比较差
// Your runtime beats 31.91 % of javascript submissions
const numPairsDivisibleBy60bad = function(time) {
  let res = 0;
  const len = time.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let sum = time[i] + time[j];
      if (sum % 60 === 0) {
        res++;
      }
    }
  }
  return res;
};

// 思路二：先用字典记录一下余数的个数，然后遍历这个字典
// 时间复杂度是 N (最差是 N ^ 2，即所有时间都不同)
// 因为 time 范围是 1~500 所以这个情况比较少，趋近于 N
// Your runtime beats 82.98 % of javascript submissions
const numPairsDivisibleBy60 = function(time) {
  let dict = [];
  const len = time.length;
  let time60 = 0;
  for (let i = 0; i < len; i++) {
    let curr = time[i];
    // 能被60整除的单独拿出来？
    let remain = curr % 60;
    if (remain === 0) {
      time60++;
      continue;
    }
    if (dict[remain]) {
      dict[remain]++;
    } else {
      dict[remain] = 1;
    }
  }
  let res = 0;
  // 注意： 30 比较特殊
  for (let i = 1; i < 30; i++) {
    let time = dict[i];
    let time2 = dict[60 - i];
    res += (time * time2 || 0); 
  }
  // 30特殊处理
  let time30 = dict[30];
  if (time30 > 0) {
    res += ((time30 - 1) * time30 / 2)
  }
  // 60 特殊处理
  if (time60 > 0) {
    res += ((time60 - 1) * time60 / 2)
  }
  return res;
};

// console.log(numPairsDivisibleBy60([6,20]) === 0)
// console.log(numPairsDivisibleBy60([30,20,150,100,40]) === 3)
// console.log(numPairsDivisibleBy60([60,60,60]) === 3)
// console.log(numPairsDivisibleBy60([60,60,60,60,60]) === 10)
// console.log(numPairsDivisibleBy60([30,30,30,20,40]) === 4)
// @lc code=end
export { numPairsDivisibleBy60, numPairsDivisibleBy60bad };
