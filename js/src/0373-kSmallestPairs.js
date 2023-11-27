/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * [373] 查找和最小的K对数字
 */
// @lc code=start
/**
 * @param {number[]} nums1 数组的长度可能在10000左右
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// var kSmallestPairs = function(nums1, nums2, k) {
//   // 1、特殊情况
//   if (k === 1) {
//     return [nums1[0], nums2[0]];
//   }
//   // 2、如果两个数组的全部组合小于等于K个，那么直接返回全部组合
//   const len1 = nums1.length;
//   const len2 = nums2.length;
//   const res = [];
//   if (len1 * len2 <= k) {
//     for (let i = 0; i < len1; i++) {
//       const a = nums1[i];
//       for (let j = 0; j < len2; j++) {
//         const b = nums2[j];
//         const item = [a, b];
//         res.push(item);
//       }
//     }
//     return res;
//   }
//   // 3、如果两个数组的全部组合大于K个，双指针 + 贪心算法
//   let pointer1 = 0;
//   let pointer2 = 0;
//   res.push([nums1[pointer1], nums2[pointer2]]);
//   // 看下一个位置是哪个？然后放到数组中来
//   while (res.length < k) {
//     // 这两个情况算出来是错的，当一个到头时，另一个应该从第一个开始算？
//     // 当第一个指针到头了
//     if (!nums1[pointer1 + 1]) {
//       pointer2++;
//     }
//     // 当第二个指针到头了
//     else if (!nums2[pointer2 + 1]) {
//       pointer1++;
//     }
//     // 两个指针都在数组中，这个逻辑不合适
//     else {
//       if (nums1[pointer1 + 1] <= nums2[pointer2 + 1]) {
//         pointer1++;
//       } else {
//         pointer2++;
//       }
//     }
//     console.log(pointer1, pointer2);
//     res.push([nums1[pointer1], nums2[pointer2]]);
//   }
//   return res;
// };

// // console.log(kSmallestPairs([1,1,2,2,3,3,3,4,4,4,7,8,8,8,8,10], [1,2,3,4,5,6,7,8,9,20,30], 25));
// // console.log(kSmallestPairs([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 30], 25));
// // 这个例子不正确
// // @lc code=end

// 官方思路：多路并归; 优先队列
// 链接：https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/solution/pythonjavajavascriptgo-duo-lu-gui-bing-y-8pfu/
// 优先队列：
// https://algo.itcharge.cn/04.Queue/02.Priority-Queue/01.Priority-Queue/#5-%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97%E7%9A%84%E5%BA%94%E7%94%A8
// https://juejin.cn/post/7208847676404711481

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = function(nums1, nums2, k) {
  const pq = new PriorityQueue();
  const ans = [];

  for (let i = 0; i < Math.min(k, nums1.length); i++) {
    pq.offer([nums1[i] + nums2[0], i, 0]);
  }

  while (pq.size > 0 && k-- > 0) {
    const cur = pq.poll();
    ans.push([nums1[cur[1]], nums2[cur[2]]]);
    if (cur[2] < nums2.length - 1) {
      pq.offer([nums1[cur[1]] + nums2[cur[2] + 1], cur[1], cur[2] + 1]);
    }
  }
  return ans;
};

// 需要优先队列数据结构
class PriorityQueue {
  constructor(
    compare = (a, b) => a[0] - b[0] < 0,
  ) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }

  peek() {
    return this.size === 0 ? null : this.data[0];
  }

  offer(val) {
    this.data.push(val);
    this._shifUp(this.size++);
  }

  poll() {
    if (this.size === 0) { return null; }
    this._swap(0, --this.size);
    this._shifDown(0);
    return this.data.pop();
  }

  _parent(index) {
    return index - 1 >> 1;
  }

  _child(index) {
    return (index << 1) + 1;
  }

  _shifDown(index) {
    while (this._child(index) < this.size) {
      let child = this._child(index);
      if (child + 1 < this.size
        && this.compare(this.data[child + 1], this.data[child])) {
        child = child + 1;
      }
      if (this.compare(this.data[index], this.data[child])) {
        break;
      }
      this._swap(index, child);
      index = child;
    }
  }

  _shifUp(index) {
    while (this._parent(index) >= 0 && this.compare(this.data[index], this.data[this._parent(index)])) {
      this._swap(index, this._parent(index));
      index = this._parent(index);
    }
  }

  _swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }
}

export { kSmallestPairs };
