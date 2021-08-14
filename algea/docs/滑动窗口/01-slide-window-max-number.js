// 滑动窗口的最大值（细节有问题，详见239题目）
var sliceWindow = (arr, k) => {
  let list = [];
  let len = arr.length;
  list[0] = 0;
  // 先把前K个元素放入双端队列中
  for (let i = 1; i < k - 1; i++) {
    let item = arr[i];
    let listLen = list.length;
    for (let j = 0; j < listLen; j++) {
      if (list[j] < item) {
        list.splice(j, listLen - j ,i);
        break;
      }
      if (list[list.length - 1] > item) {
        list.push(i);
      }
    }
  }
  let result = [];
  for (let i = k - 1; i < len; i++) {
    // 此时还是按照原来的策略，然后每次把首个位置的元素（最大值）保存到结果数组中
    let item = arr[i];
    let listLen = list.length;
    for (let j = 0; j < listLen; j++) {
      if (list[j] < item) {
        list.splice(j, listLen - j ,i);
        break;
      }
      if (list[list.length - 1] > item) {
        list.push(i);
      }
    }
    result.push(arr[list[0]]);
  }
  return result;
};

// 时间复杂度：列表长度 * 滑动窗口长度，能否有更好的方法（进入队列能否优化）
// 空间复杂度：会频繁操作数组
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 
let res = sliceWindow([1,3,-1,-3,5,3,6,7], 3);
console.log(res);
