/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// 执行用时：
// 276 ms
// , 在所有 JavaScript 提交中击败了
// 28.26%
// 的用户
// 内存消耗：
// 50.5 MB
// , 在所有 JavaScript 提交中击败了
// 29.36%
// 的用户

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // 搜索：优先使用哈希表;
  this.cap = capacity;
  this.dict = {};
  // 一个哈希表存放当前的索引 dict
  this.operations = [];
  // 还有一个数组？存放当前使用的键？记录操作 operations
  // 当数组的长度超过给定长度时，清除最早的数组元素。
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // 现在的问题是缓存没有清理
  // 找到这个元素，返回，并改变频率
  if (this.dict[key]) {
    // 更改操作频率
    let keyIndex = this.operations.indexOf(key);
    if (keyIndex === -1) {
      // 不存在当前的键：插入并判断是否超出范围
      this.operations.push(key);
      if (this.operations.length > this.cap) {
        let deletedKey = this.operations.shift();
        delete this.dict[deletedKey];
      }
    } else {
      // 存在当前的键：删除这个位置，然后后面插入
      this.operations.splice(keyIndex, 1);
      this.operations.push(key);
    }
    return this.dict[key];
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.dict[key] = value;
  let keyIndex = this.operations.indexOf(key);
  if (keyIndex === -1) {
    // 不存在当前的键：插入并判断是否超出范围
    this.operations.push(key);
    if (this.operations.length > this.cap) {
      let deletedKey = this.operations.shift();
      delete this.dict[deletedKey];
    }
  } else {
    // 存在当前的键：删除这个位置，然后后面插入
    this.operations.splice(keyIndex, 1);
    this.operations.push(key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
