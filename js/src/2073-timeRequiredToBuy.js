// 有 n 个人前来排队买票，其中第 0 人站在队伍 最前方 ，第 (n - 1) 人站在队伍 最后方 。
// 给你一个下标从 0 开始的整数数组 tickets ，数组长度为 n ，其中第 i 人想要购买的票数为 tickets[i] 。
// 每个人买票都需要用掉 恰好 1 秒 。一个人 一次只能买一张票 ，如果需要购买更多票，他必须走到
// 队尾 重新排队（瞬间 发生，不计时间）。如果一个人没有剩下需要买的票，那他将会 离开 队伍。
// 返回位于位置 k（下标从 0 开始）的人完成买票需要的时间（以秒为单位）。
// 链接：https://leetcode-cn.com/problems/time-needed-to-buy-tickets

// 考点：数组运算（简单）
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
const timeRequiredToBuy = function(tickets, k) {
  const curr = tickets[k];
  let sum = 0;
  let decrease = 0;
  // 循环一次：如果小于这个数，直接加上；如果大于这个数，那么加这个数字
  // 如果数组长度变化了，不需要考虑 K 的变化（刚开始自己的误区）
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i] < curr) {
      sum += tickets[i];
    } else {
      sum += curr;
      // 易错点：如果是这个数后面的数字，那么需要减去1（只要前一个满足，后面的就不需要计算了）
      if (i > k) {
        decrease++;
      }
    }
  }
  return sum - decrease;
};

export { timeRequiredToBuy };
