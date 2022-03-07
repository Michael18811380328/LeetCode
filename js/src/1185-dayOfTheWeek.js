/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// 80 ms
// , 在所有 JavaScript 提交中击败了
// 75.32%
// 的用户
const dict = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfTheWeek = function(day, month, year) {
  // 思路：1971 到 2100 之间获取 1971-01-01 的星期几
  // 然后算出两个日期的相对差，除以7 求余数
  // 注意闰年等
  let sum = 0;
  if (year > 1971) {
    // 优化，直接乘法计算
    for (let i = 1971; i < year; i++) {
      const item = i % 4 === 0 ? 2 : 1;
      sum += item;
    }
  }
  // 计算月(计算正常)
  for (let i = 1; i < month; i++) {
    if ([1, 3, 5, 7, 8, 10, 12].includes(i)) {
      sum += 31;
    } else if (i === 2) {
      if (year % 4 === 0 && year !== 2100) {
        sum += 29;
      } else {
        sum += 28;
      }
    } else {
      sum += 30;
    }
  }
  // 计算日
  sum += day;
  const remain = (sum + 4) % 7;
  return dict[remain];
  // 除以7，计算星期
};
