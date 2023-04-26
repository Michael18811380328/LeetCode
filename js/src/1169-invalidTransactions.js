/*
 * @lc app=leetcode.cn id=1169 lang=javascript
 * [1169] 查询无效交易
 */
/**
 * @param {string[]} transactions
 * @return {string[]}
 * 72 ms, 在所有 JavaScript 提交中击败了100.00%
 */
const invalidTransactions = function(transactions) {
  const len = transactions.length;
  // 数据预处理，把字符串转换成数组，便于后续比较
  for (let i = 0; i < len; i++) {
    const list = transactions[i].split(',');
    const name = list[0];
    const time = parseInt(list[1]);
    const amount = parseInt(list[2]);
    const city = list[3];
    transactions[i] = { name, time, amount, city };
  }
  // 辅助函数：判断当前交易是否有效
  const isInvalidTransaction = (item, transactions) => transactions.some((info) => {
    if (info.name === item.name && info.city !== item.city) {
      return Math.abs(info.time - item.time) <= 60;
    } else {
      return false;
    }
  });
  // 过滤超过1000的数量，并且判断是否满足
  const res = transactions.filter((item) => {
    return item.amount > 1000 || isInvalidTransaction(item, transactions);
  });
  // 结果合并成字符串后返回
  return res.map((i) => `${i.name},${i.time},${i.amount},${i.city}`);
};

// console.log(invalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"])) // ["alice,20,800,mtv","alice,50,100,beijing"]
// console.log(invalidTransactions(["alice,20,800,mtv","alice,50,1200,mtv"])) // ["alice,50,1200,mtv"]
// console.log(invalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"])) // ["bob,50,1200,mtv"]
// console.log(invalidTransactions(["alice,20,1220,mtv","alice,20,1220,mtv"])) // [ 'alice,20,1220,mtv', 'alice,20,1220,mtv' ]

export { invalidTransactions };
