/**
 * @param {number} n
 */
// 232 ms
// , 在所有 JavaScript 提交中击败了
// 44.78%
// 的用户
const OrderedStream = function(n) {
  this.arr = ['test'];
  this.ptr = 1;
};

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(id, value) {
  this.arr[id] = value;
  if (id > this.ptr) {
    return [];
  } else {
    const tmp = [];
    tmp.push(value);
    this.ptr++;
    while (this.arr[this.ptr]) {
      tmp.push(this.arr[this.ptr]);
      this.ptr++;
    }
    return tmp;
  }
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * let obj = new OrderedStream(n)
 * let param_1 = obj.insert(id,value)
 */
