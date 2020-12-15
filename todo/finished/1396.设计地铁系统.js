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
var UndergroundSystem = function() {
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
  let key = `${id}`;
  let value = { stationName, t };
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
  let key = `${id}`;
  let start = tmpTime[key];
  let startStation = start.stationName;
  let startT = start.t;
  
  let newKey = `${startStation}-${stationName}`;
  let newValue = t - startT;
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
  let key = `${startStation}-${endStation}`;
  let arr = time[key];
  if (!arr) return null;
  let sum = arr.reduce((a, b) => {return a + b}, 0);
  return sum / arr.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
// @lc code=end

