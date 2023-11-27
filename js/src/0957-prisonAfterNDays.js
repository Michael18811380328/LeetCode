/*
 * @lc app=leetcode.cn id=957 lang=javascript
 * [957] N 天后的牢房
 * 自己没有独立想出算法
 */

// @lc code=start
/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
// N可能出现极大值，那么不能使用循环暴力解决
// 可能M次后出现一次循环，那么就把这个情况记录在哈希表中
// 然后N求余数，计算满足的情况
const prisonAfterNDays = function(cells, N) {
  const hash = [];
  let index = 0;
  // hash[index] = cells.join('');
  // 这是初始化的情况；
  let circle;
  while (index < N) {
    // 获取下一个情况
    const tmp = new Array(8);
    for (let i = 1; i < 7; i++) {
      tmp[i] = cells[i - 1] === cells[i + 1] ? 1 : 0;
    }
    tmp[0] = 0;
    tmp[7] = 0;
    index++;
    const key = tmp.join('');
    // console.log(key === hash[1]);
    if (key === hash[1]) {
      circle = index - 1;
      break;
    }
    hash[index] = key;
    cells = tmp;
  }
  // N小于一个周期
  // N小于一个周期
  if (index === N) {
    return hash[index].split('');
  }
  // 这里不正确
  // N大于一个周期
  const n = N % circle;
  // console.log(hash);
  // console.log(n);
  return hash[n].split('');
};

// 现在不正确
// [0,1,0,1,1,0,0,1]
// 7
// [0,0,1,1,1,1,0,0]
// 8
// @lc code=end

// 思路2：
// 性能优化：我们用状况数组arr记录每天的牢房状况，当我们某天遇到新的牢房状况时，如果数组中出现过该状况，那后续的牢房每天的状况，都应该会在出现过的那天到新的这天，这段状态中循环。
// 我们用sign来记录是否遭遇状况循环，如果遭遇了状况循环，我们直接退出天数的循环，可以在状况数组中推断出第n天的情况arr[n % (arr.length - sign) + sign]，如果直到n天都遍历结束，sign仍然没变，则返回最后一天的状况arr[arr.length - 1]即可。
// 链接：https://leetcode.cn/problems/prison-cells-after-n-days/solutions/2340820/js-zhuang-kuang-shu-zu-si-lu-by-yue-lian-hkp3/
const prisonAfterNDays2 = function(cells, n) {
  const arr = [cells.join('')];
  let sign = -1;
  while (n--) {
    cells = cells.map((cell, i) => {
      if (i === 0 || i === cells.length - 1) {
        return 0;
      } else {
        return Number(cells[i - 1] === cells[i + 1]);
      }
    });
    sign = arr.indexOf(cells.join(''));
    if (sign > -1) {
      break;
    } else {
      arr.push(cells.join(''));
    }
  }
  return sign === -1 ? arr[arr.length - 1].split('') : arr[n % (arr.length - sign) + sign].split('');
};

export { prisonAfterNDays, prisonAfterNDays2 };
