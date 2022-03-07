/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */
// Your runtime beats 83.99 % of javascript submissions
// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
  nums.sort((a, b) => b - a);
  this.arr = nums.slice(0, k);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const len = this.arr.length;
  const last = this.arr[len - 1];
  // 当前的数组比预期的长度小，正常插入，然后返回
  if (len < this.k) {
    this.arr.push(val);
    this.arr.sort((a, b) => b - a);
    return this.arr[this.k - 1];
  }
  // 插入的比最小的还小
  if (val <= last) {
    return this.arr[this.k - 1];
  }
  // 插入的比最小的大，正常插入
  // console.log(this.arr, val);
  for (let i = 0; i < len; i++) {
    if (val > this.arr[i]) {
      // console.log(this.arr);
      this.arr.splice(i, 0, val);
      this.arr.pop();
      // console.log(this.arr);
      return this.arr[this.k - 1];
    }
  }
};

// ["KthLargest","add","add","add","add","add"]
// [[1,[]],[-3],[-2],[-4],[0],[4]]
/**
 * Your KthLargest object will be instantiated and called as such:
 * let obj = new KthLargest(k, nums)
 * let param_1 = obj.add(val)
 */
// @lc code=end
