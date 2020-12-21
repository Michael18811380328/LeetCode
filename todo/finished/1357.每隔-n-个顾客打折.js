/*
 * @lc app=leetcode.cn id=1357 lang=javascript
 *
 * [1357] 每隔 n 个顾客打折
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
// Your runtime beats 8.33 % of javascript submissions
var Cashier = function(n, discount, products, prices) {
  this.n = n;
  this.discount = (100 - discount) / 100;
  this.products = products;
  this.prices = prices;
  this.current = 0;
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
  // 最后处理折扣
  let sum = 0;
  const len = product.length;
  for (let i = 0; i < len; i++) {
    let item = product[i];
    let index = this.products.indexOf(item);
    let price = this.prices[index];
    sum = sum + price * amount[i];
  }
  this.current++;
  if (this.current % this.n === 0) {
    sum = sum * this.discount;
    this.current = 0;
  }
  return sum;
};

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
// @lc code=end

