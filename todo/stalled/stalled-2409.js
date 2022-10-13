/*
 * @lc app=leetcode.cn id=2409 lang=javascript
 *
 * [2409] 统计共同度过的日子数
 */

// @lc code=start
/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  // 辅助函数：把日期字符串转换成数字，比较大小
  const str2num = (str) => {
    return parseInt(str[0] + str[1] + str[3] + str[4]);
  };

  // 如果他们的日期没有交集，那么肯定没有重复
  // 这里转换成数字比较
  if (str2num(arriveBob) > str2num(leaveAlice) || str2num(arriveAlice) > str2num(leaveBob)) {
    return 0;
  }
  // 如果有交集，计算时间
  // 先把开始和结束的时间计算出来
  // 这里计算有误，不能这样写
  // 应该先把开始的最大值求出来，然后结束的最小值求出来，然后比较这两个是否有交集
  let start, end;
  if (str2num(arriveBob) < str2num(leaveAlice)) {
    end = leaveAlice;
    start = arriveBob;
  } else if (str2num(arriveAlice) < str2num(leaveBob)) {
    end = leaveBob;
    start = arriveAlice;
  }
  // 然后求这两个时间的差值(字符串)
  const startMonth = parseInt(start[0] + start[1]);
  const endMonth = parseInt(end[0] + end[1]);
  const startDay = parseInt(start[3] + start[4]);
  const endDay = parseInt(end[3] + end[4]);
  // 1 开始和结束是一个月
  if (startMonth === endMonth) {
    return endDay - startDay + 1;
  }
  // 2 开始和结束不在一个月
  const list = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let days = 0;
  for (let i = startMonth; i < endMonth; i++) {
    console.log(i);
    days += list[i + 1];
  }
  console.log(days);
};

console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19") === 3)
console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19") === 3)
// console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31") === 0)

// @lc code=end

