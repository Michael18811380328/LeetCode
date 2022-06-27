/*
 * @lc app=leetcode.cn id=1396 lang=javascript
 *
 * [1396] 设计地铁系统
 */

// @lc code=start

// 这里设置两个对象
// 一个存储临时的时间
// 另一个
// Your runtime beats 80 % of javascript submissions
const UndergroundSystem = function() {
  tmpTime = {};
  time = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  const key = `${id}`;
  const value = { stationName, t };
  tmpTime[key] = value;
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  // 从临时缓存中拿到上车的数据
  const key = `${id}`;
  const start = tmpTime[key];
  const startStation = start.stationName;
  const startT = start.t;

  const newKey = `${startStation}-${stationName}`;
  const newValue = t - startT;
  if (!time[newKey]) {
    time[newKey] = [];
  }
  time[newKey].push(newValue);
  delete tmpTime[key];
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  const key = `${startStation}-${endStation}`;
  const arr = time[key];
  if (!arr) return null;
  const sum = arr.reduce((a, b) => { return a + b; }, 0);
  return sum / arr.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * let obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * let param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end

export { UndergroundSystem };
