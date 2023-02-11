/*
 * @lc app=leetcode.cn id=2409 lang=javascript
 * [2409] 统计共同度过的日子数
 * 60 ms, 在所有 JavaScript 提交中击败了 65.00%
 */
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
const countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  // 辅助函数：判断某一天是一年中的第多少天（简化版 1154 代码）默认不是闰年
  const dayOfYear = function(date) {
    const month = Number(date.slice(0, 2));
    const day = Number(date.slice(3));
    const getMonthDays = (month) => {
      let sum = 0;
      const month31 = [1, 3, 5, 7, 8, 10, 12];
      for (let i = 1; i <= month; i++) {
        if (i === 2) {
          sum += 28;
        } else if (month31.includes(i)) {
          sum += 31;
        } else {
          sum += 30;
        }
      }
      return sum;
    };
    return getMonthDays(month - 1) + day;
  };
  // 主函数 因为是在一年内，计算出两个时间分别对应的天数是第几天, 例如：[10, 20] [15, 30] 然后两个数组再求交集
  const alice = [dayOfYear(arriveAlice), dayOfYear(leaveAlice)];
  const bob = [dayOfYear(arriveBob), dayOfYear(leaveBob)];
  if (alice[1] < bob[0]) return 0;
  if (bob[1] < alice[0]) return 0;
  const days = [...alice, ...bob].sort((a, b) => a > b ? 1 : -1);
  return days[2] - days[1] + 1;
};

// console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19") === 3)
// console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19") === 3)
// console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31") === 0)

export { countDaysTogether };
