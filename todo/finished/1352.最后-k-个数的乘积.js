/*
 * @lc app=leetcode.cn id=1352 lang=javascript
 *
 * [1352] 最后 K 个数的乘积
 */

// @lc code=start
// Your runtime beats 54.55 % of javascript submissions
var ProductOfNumbers = function() {
  this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
  this.arr.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
  let res = 1;
  // console.log(this.arr);
  for (let i = this.arr.length - 1; i > this.arr.length - 1 - k; i --) {
    res *= this.arr[i];
  }
  return res;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
// @lc code=end

