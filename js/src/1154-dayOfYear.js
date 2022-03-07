// 1154. 一年中的第几天
// 给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，请你计算并返回该日期是当年的第几天。
// 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。

// 示例 1：
// 输入：date = "2019-01-09"
// 输出：9
// 示例 2：
// 输入：date = "2019-02-10"
// 输出：41
// 示例 3：
// 输入：date = "2003-03-01"
// 输出：60
// 示例 4：
// 输入：date = "2004-03-01"
// 输出：61

/**
 * @param {string} date
 * @return {number}
 */
const dayOfYear = function(date) {
  const isLeapYear = (year) => {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    }
    return year % 4 === 0;
  };

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
  // 1、把年月日提取出来-不需要数组，直接切割字符串，然后转换成数值
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));
  if (month > 2) {
    // 2、判断是否需要计算闰年（月份大于等于3月，需要计算闰年，否则不需要计算）
    // 2、1 如果是闰年，写一个闰年函数，并判断
    // 写一个月份对应的日期数组，或者累加函数
    // 然后加上日期即可
    const isLeap = isLeapYear(year) ? 1 : 0;
    const monthDays = getMonthDays(month - 1);
    return monthDays + isLeap + day;
  } else {
    // 直接计算12月的天数，不需要考虑闰年
    if (month === 1) {
      return day;
    } else {
      return 31 + day;
    }
  }
};
