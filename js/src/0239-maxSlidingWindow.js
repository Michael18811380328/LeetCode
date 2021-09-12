// 滑动窗口的最大值(239)
// 4476 ms, 在所有 JavaScript 提交中击败了27.75%的用户
// 现在还是有性能问题，正常的算法应该在 300ms 左右
// 看一下还能怎么优化
// 用空间换时间，多使用内存，少使用循环！
var maxSlidingWindow = function(nums, k) {
  // 处理特殊情况
  if (k === 1) {
    return nums;
  }
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }

  // list 是单调递减的双端队列
  let list = [];
  list[0] = 0;

  // 初始化前面几个值
  for (let i = 1; i < k; i++) {
    let item = nums[i];
    let listLen = list.length;
    // 如果当前的值小于最后一个的值，直接插入到队列最后
    if (nums[list[listLen - 1]] > item) {
      list.push(i);
    }
    // 否则，找到合适的位置，插入队列中
    // 这个很消耗性能，如果 K = 30000 那么插入操作是 N 的平方，未来可以用二分法优化
    // 这里应该使用双端队列优化，现在直接在数组中插入性能很差
    else {
      for (let j = 0; j < listLen; j++) {
        if (nums[list[j]] <= item) {
          list.splice(j, listLen - j, i);
          break;
        }
      }
    }
  }
  // 现在已经把开始的K个元素放入了队列中，然后开始遍历剩下的数字，然后获取最大值
  let res = [];
  res[0] = nums[list[0]];

  for (let i = k; i < len; i++) {
    let item = nums[i];
    let listLen = list.length;
    // 如果新增的值小于最小的，那么直接插入最后
    if (nums[list[listLen - 1]] > item) {
      list.push(i);
    } else {
      for (let j = 0; j < listLen; j++) {
        if (nums[list[j]] < item) {
          list.splice(j, listLen - j, i);
          break;
        }
      }
    }
    // 把距离大于K的都删除掉
    list = list.filter((item) => {
      return i - item < k;
    });
    res.push(nums[list[0]]);
  }
  return res;
};

// 时间复杂度：列表长度 * 滑动窗口长度，能否有更好的方法（进入队列能否优化）
// 空间复杂度：会频繁操作数组
// 现在30000正常，50000还是会爆

// 注意：The queue size need not be the same as the window’s size.
// Remove redundant elements and the queue should store only elements that need to be considered.
// 队列的长度不需要等于滑动窗口的长度，所以，应该把大于后面的值的后面的全部删除，而不是 splice 简单操作
// 这样可以较少不少的数据量

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7] 
console.log(maxSlidingWindow([9, 11, 1,3,-1,-3,5,3,6,7, 1,3,-1,-3,5,3,6,7, 1,3,-1,-3,5,3,6,7], 4)); // [11,11,3,5,5,6,7,7,7,7,3,5,5,6,7,7,7,7,3,5,5,6,7]
console.log(maxSlidingWindow([9, 11, 1,3,-1,-3,5], 4)); // [11,11,3,5]
console.log(maxSlidingWindow([1, -1,1,3,-1,-3,5,3,6,7,1,3,-1,-3,5,3,6,7,1], 3));
// [
//   1, 3, 3, 3, 5, 5, 6,
//   7, 7, 7, 3, 3, 5, 5,
//   6, 7, 7
// ]
console.log(maxSlidingWindow([9,10,9,-7,-4,-8,2,-6], 5)); // [10,10,9,2]

// 现在基本逻辑正确，特别长的会超时（K是30000的情况）
// 需要优化性能
