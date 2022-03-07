// 要求：二进制手表：给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。
// 小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。——小时部分如果是1位数，不需要加0
// 分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。——分钟部分如果是1位数，需要加0
// 上面两个最后使用函数优化
// 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃，也就是说不会出现 "13:00", "0:61" 等时间。
// 一共有10盏灯，使用回溯算法处理
// 新建一个二维数组，然后随机获取对应的值，然后计算出结果即可
// arr = [[1, 0], [2, 0], [4, 0], [8, 0], [0, 1], [0, 2], [0, 4], [0, 8], [0, 16], [0, 32]];
// 然后求出满足条件的组合
// 然后把数组的结果加起来
// 进行格式化处理
// 即可获取对应的解
// 函数内部实现递归操作

// n = 0
// 返回 ["0:00"]

// 输入: n = 1
// 返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]

// n > 10
// 返回 []

// n === 10
// 返回 [59:59]

/**
 * @param {number} num
 * @return {string[]}
 */
const TIMES = [100, 200, 400, 800, 1, 2, 4, 8, 16, 32];
// 96 ms, 在所有 JavaScript 提交中击败了26.51%
const readBinaryWatch = function(num) {
  if (num === 0) {
    return ['0:00'];
  } else if (num > 8) {
    return [];
  }
  const list = [];
  const temp = [];
  backTrack(list, temp, num, TIMES);
  return list;
};

var backTrack = function(list, temp, num, times) {
  // 如果临时数组满足条件，那么计算当前的时间，然后放在List中
  if (temp.length === num) {
    const time = formatTime(temp);
    if (time) list.push(time);
    return;
  }
  // TIMES 这个先 filter 一下 temp，然后再循环，这样好一点
  // times = TIMES.filter(item => !temp.includes(item));
  for (let i = 0; i < times.length; i++) {
    const item = times[i];
    // 这里push的必须是当前最后一个元素后面的数组，不能是全部的数组，否则会重复
    // 那么这里第四个参数需要改变
    temp.push(item);
    // 先index切割，然后再filter一下
    const lastTimes = TIMES.slice(TIMES.indexOf(item));
    const newTimes = lastTimes.filter((time) => !temp.includes(time) && time !== item);
    backTrack(list, temp, num, newTimes);
    temp.pop();
  }
};

// 单独写一个函数处理时间的格式
var formatTime = function(timeArr) {
  let time = 0;
  timeArr.forEach((item) => time += item);
  let minute = time % 100;
  let hour = (time - minute) / 100;
  // 超过表示范围（小时 0-11，分钟 0-59）的数据将会被舍弃
  if (hour > 11 || minute > 59) {
    return null;
  }
  minute = minute < 10 ? `0${minute}` : minute;
  minute = minute === 0 ? '00' : minute;
  hour = hour.length === 0 ? '0' : hour;
  return `${hour}:${minute}`;
};

export { readBinaryWatch };
