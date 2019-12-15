// 56-给出一个区间的集合，请合并所有重叠的区间。
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 104 ms, 在所有 javascript 提交中击败了43.07%
function merge(intervals) {
  const len = intervals.length;
  if (len === 1 || len === 0) {
    return intervals;
  }
  // 首先对第一个使用排序
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < len; i++) {
    const item = intervals[i];
    const lastItem = intervals[i - 1];
    if (!item) break;
    if (lastItem[1] >= item[0] && lastItem[1] < item[1]) {
      // 后一个的第一位小于前一个的第二位
      const newItem = [lastItem[0], item[1]];
      intervals.splice(i - 1, 2, newItem);
      i--;
    } else if (lastItem[1] >= item[0] && lastItem[1] >= item[1]) {
      // 后一个的第二位小于前一个的第二位，直接删除后一个数
      intervals.splice(i, 1);
      i--;
    }
  }
  return intervals;
}

export { merge };
