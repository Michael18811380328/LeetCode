/**
 * Initialize your data structure here.
 */
const MyHashMap = function() {
  this.hash = [];
  // 实际上JS的数组就是一个对象
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  this.hash[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  if (this.hash[key] === 0) return 0;
  return this.hash[key] || -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  delete this.hash[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * let obj = new MyHashMap()
 * obj.put(key,value)
 * let param_2 = obj.get(key)
 * obj.remove(key)
 */

export { MyHashMap };
