/*
 * @lc app=leetcode.cn id=1169 lang=javascript
 *
 * [1169] 查询无效交易
 */

// @lc code=start
/**
 * @param {string[]} transactions
 * @return {string[]}
 */
// 暴力处理，数组长度1000，可以双重遍历，然后比较两个值是否满足无效交易
var invalidTransactions = function(transactions) {
  const len = transactions.length;
  // 在这里处理重复值？
  // 数据预处理，把字符串转换成数组，便于后续比较
  for (let i = 0; i < len; i++) {
    let list = transactions[i].split(',');
    let name = list[0];
    let time = parseInt(list[1]);
    let amount = parseInt(list[2]);
    let city = list[3];
    transactions[i] = { name, time, amount, city }
  }
  let result = [];
  function compare(a, b) {    
    if (a.amount > 1000) {
      result.push(`${a.name},${a.time},${a.amount},${a.city}`);
    }
    if (b.amount > 1000) {
      result.push(`${b.name},${b.time},${b.amount},${b.city}`);
    }
    if (a.name === b.name && a.city !== b.city && Math.abs(a.time - b.time) < 60) {
      result.push(`${a.name},${a.time},${a.amount},${a.city}`);
      result.push(`${b.name},${b.time},${b.amount},${b.city}`);
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      compare(transactions[i], transactions[j]);
    }
  }
  return Array.from(new Set(result));
};
// @lc code=end

console.log(invalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"])) // ["alice,20,800,mtv","alice,50,100,beijing"]
console.log(invalidTransactions(["alice,20,800,mtv","alice,50,1200,mtv"])) // ["alice,50,1200,mtv"]
console.log(invalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"])) // ["bob,50,1200,mtv"]
// ["alice,20,1220,mtv","alice,20,1220,mtv"] 可能有重复的，不能直接去重
