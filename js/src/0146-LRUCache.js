/*
 * [146] LRU缓存机制
 * 276 ms, 在所有 JavaScript 提交中击败了28.26%
 */
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
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
LRUCache.prototype.get = function (key) {
  // 现在的问题是缓存没有清理
  // 找到这个元素，返回，并改变频率
  if (this.dict[key]) {
    // 更改操作频率
    const keyIndex = this.operations.indexOf(key);
    if (keyIndex === -1) {
      // 不存在当前的键：插入并判断是否超出范围
      this.operations.push(key);
      if (this.operations.length > this.cap) {
        const deletedKey = this.operations.shift();
        delete this.dict[deletedKey];
      }
    } else {
      // 存在当前的键：删除这个位置，然后后面插入
      this.operations.splice(keyIndex, 1);
      this.operations.push(key);
    }
    return this.dict[key];
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  this.dict[key] = value;
  const keyIndex = this.operations.indexOf(key);
  if (keyIndex === -1) {
    // 不存在当前的键：插入并判断是否超出范围
    this.operations.push(key);
    if (this.operations.length > this.cap) {
      const deletedKey = this.operations.shift();
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

export { LRUCache };
