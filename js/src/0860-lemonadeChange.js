/*
 * [860] 柠檬水找零
 */

// 
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 96 ms
// , 在所有 JavaScript 提交中击败了
// 38.00%
// 的用户
var lemonadeChange = function(bills) {
  if (bills.length === 0) {
    return true;
  }
  let res = {};
  res['5'] = 0;
  res['10'] = 0;
  for (let i = 0; i < bills.length; i++) {
    let item = bills[i];
    switch (item) {
      case 5:
        res['5'] = res['5'] + 1;
        break;
      case 10:
        res['10'] = res['10'] + 1;
        if (res['5'] === 0) {
          return false;
        } else {
          res['5'] = res['5'] - 1;
        }
        break;
      case 20:
        if (res['10'] === 0) {
          // 需要找三张5
          if (res['5'] < 3) {
            return false;
          } else {
            res['5'] = res['5'] - 3;
          }
        } else {
          // 有10元，需要找一张10元1张5元
          if (res['5'] === 0) {
            return false;
          } else {
            res['10'] = res['10'] - 1;
            res['5'] = res['5'] - 1;
          }
        }
        break;
      default:
        break;
    }
  }
  return true;
};


