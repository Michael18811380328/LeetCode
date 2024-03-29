/*
 * [380] 常数时间插入、删除和获取随机元素
 */
// 216 ms, 在所有 JavaScript 提交中击败了42.73%
/**
 * Initialize your data structure here.
 */
const RandomizedSet = function() {
  // 初始化一个没有重复的Set键值对
  hashTable = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  // 首先判断是否存在
  const has = hashTable.has(val);
  if (has) {
    // 如果存在，不插入元素，并返回 false
    return false;
  } else {
    // 如果不存在，插入元素，并返回 true
    hashTable.set(val);
    return true;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  const has = hashTable.has(val);
  if (has) {
    hashTable.delete(val);
    // 如果存在，不插入元素，并返回 false
    return true;
  } else {
    // 如果不存在，插入元素，并返回 true
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  // 获取当前的数量
  const size = hashTable.size;
  if (size === 0) return null; // 这个需要测试（空集合）
  const keys = [...hashTable.keys()];
  // 然后设置一个随机数，然后通过下标获取对应的元素
  const index = Math.floor(Math.random() * size);
  return keys[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * let obj = new RandomizedSet()
 * let param_1 = obj.insert(val)
 * let param_2 = obj.remove(val)
 * let param_3 = obj.getRandom()
 */

export { RandomizedSet };
