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
// 先把名字相同的单独弄一个数组，然后按照交易时间排序
// 如果某一个交易和前后的间隔小于 60 分钟，并且不是同一个城市
// 那么这个交易就是不满足的交易（直接在一个循环内即可）
var invalidTransactions = function(transactions) {
  let result = [];
  let dict = {};
  for (let i = 0; i < transactions.length; i++) {
    let curr = transactions[i];
    let list = curr.split(',');
    let name = list[0];
    let time = parseInt(list[1]);
    let amount = parseInt(list[2]);
    let city = list[3];
    if (!dict[name]) {
      dict[name] = [];
    }
    dict[name].push({ name, time, amount, city });
  }
  // 然后根据交易时间排序
  for (let key in dict) {
    dict[key].sort((a, b) => {
      return a > b ? 1 : -1;
    });
  }
  console.log(dict);
  for (let key in dict) {
    dict[key].forEach((item, index) => {
      // 1 交易金额超出 1000 不满足（直接字符串转换比较）
      if (item.amount > 1000) {
        result.push(item);
      }
      // 2 名字相同，城市不同，交易时间 <= 60 分钟
      // if (item.tiem )
    });
  }
};
// @lc code=end

