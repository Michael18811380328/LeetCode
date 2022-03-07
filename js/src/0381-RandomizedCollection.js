/* *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */
// 思路一：使用数组实现
// 好处：获取随机值容易
// 缺点：删除消耗的时间较多
// （首先判断是否存在并获取索引，然后删除）
// 248 ms, 在所有 JavaScript 提交中击败了 24.14%的用户

// 思路二：使用哈希表实现
// 好处：增删简单，不需要遍历数组
// 缺点：查找消耗时间比较多
//
/**
 * Initialize your data structure here.
 */
const RandomizedCollection = function() {
  arr = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  if (arr.indexOf(val) === -1) {
    arr.push(val);
    return true;
  } else {
    arr.push(val);
    return false;
  }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  const index = arr.indexOf(val);
  if (index === -1) {
    return false;
  } else {
    arr.splice(index, 1);
    return true;
  }
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  if (arr.length === 0) {
    return 0;
  }
  const index2 = Math.floor(Math.random() * arr.length);
  return arr[index2];
};
