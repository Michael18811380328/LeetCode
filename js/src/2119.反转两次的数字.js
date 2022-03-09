/**
 * [isSameAfterReversals [2119] 反转两次的数字]
 * @author Michael An
 * @DateTime 2022-03-08T14:38:49+0800
 * @param    {number}                 num [description]
 * @return   {Boolean}                    [description]
 * 思路：0 满足，10 的倍数不满足，其他都满足
 * Your runtime beats 77.99 % of javascript submissions
 */
const isSameAfterReversals = function(num) {
  if (num === 0) {
    return true;
  }
  if (num % 10 === 0) {
    return false;
  }
  return true;
};

export { isSameAfterReversals };
