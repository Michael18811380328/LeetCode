/**
 * @param {number[][]} intervals
 * @return {number}
 * https://leetcode.cn/problems/non-overlapping-intervals/description/?envType=study-plan-v2&envId=leetcode-75
 * 435. 无重叠区间
 * 题目自己没有看出合理的思路，最后学会了官方的思路
 */
const eraseOverlapIntervals = function(intervals) {
  const len = intervals.length;
  if (len < 1) {
    return 0;
  }
  // 思路：贪心算法
  // 1、先把矩阵按照结束的位置排序
  intervals = intervals.sort((a, b) => {
    return a[1] > b[1] ? 1 : -1;
  });
  // 设置计数器默认是1（表示使用者1个区间）
  let count = 1;
  // 2、循环比较开始的位置
  // 如果和前一个重复，那么去掉这个节点，然后计数不变
  // 如果和前一个不重复，那么使用这个节点，计数器加1
  // 这里注意：需要比较当前节点的左侧区间，和start节点的右侧区间
  let start = intervals[0][1];
  for (let i = 1; i < len; i++) {
    if (intervals[i][0] >= start) {
      start = intervals[i][1];
      count++;
    }
  }
  // 最后使用数组总长度，减去使用区间的数量，就是删除区间的数量
  return len - count;
  // 也可以使用动态规划，时间复杂度较高
};

// 示例 1:

// 输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
// 输出: 1
// 解释: 移除 [1,3] 后，剩下的区间没有重叠。
// 示例 2:

// 输入: intervals = [ [1,2], [1,2], [1,2] ]
// 输出: 2
// 解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
// 示例 3:

// 输入: intervals = [ [1,2], [2,3] ]
// 输出: 0
// 解释: 你不需要移除任何区间，因为它们已经是无重叠的了。

export { eraseOverlapIntervals };
