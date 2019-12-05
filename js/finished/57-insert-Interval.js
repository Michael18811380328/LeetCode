// 57-给出一个无重叠的 ，按照区间起始端点排序的区间列表。
// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// 第一种思路：直接使用56题，合并区间。把这个区间插入到原始区间后面，重新排序，然后删除重复部分
// 第二种思路：遍历已经排序好的数组，然后把新的区间插入。从这个节点开始到最后，合并重复的区间
// 第二个不需要排序，性能更高
// 特殊情况：新的区间在全部区间之前，新的区间在全部区间之后（直接添加在数组的开始或者结尾）

// 辅助函数：改造后的issue 56
function merge(intervals, startIndex) {
  const len = intervals.length;
  for (let i = startIndex + 1; i < len; i++) {
    const item = intervals[i];
    const lastItem = intervals[i - 1];
    if (!item) break;
    if (lastItem[1] >= item[0] && lastItem[1] < item[1]) {
      const newItem = [lastItem[0], item[1]];
      intervals.splice(i - 1, 2, newItem);
      i--;
    } else if (lastItem[1] >= item[0] && lastItem[1] >= item[1]) {
      intervals.splice(i, 1);
      i--;
    }
  }
}

// 80 ms, 在所有 javascript 提交中击败了78.89%
function insert(intervals, newInterval) {
  const len = intervals.length;
  if (len === 0) {
    intervals.push(newInterval);
    return intervals;
  }
  // 这里是开始合并的序号和结束合并的序号（原始区间集合已经合并，所以不需要再次合并）
  let startIndex = 0;
  // 处理特殊情况:全部大于或者全部小于
  if (newInterval[1] < intervals[0][0]) {
    intervals.unshift(newInterval);
  } else if (newInterval[0] >= intervals[len - 1][0]) {
    intervals.push(newInterval);
    startIndex = len - 1;
  } else {
    // 把当前项插入到已有数组中
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][0] >= newInterval[0]) {
        intervals.splice(i, 0, newInterval);
        startIndex = i - 1;
        i--;
        break;
      }
    }
  }
  startIndex = startIndex >= 0 ? startIndex : 0;
  merge(intervals, startIndex);
  return intervals;
}

export { insert };
