/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  // 思路：回溯算法：求长度从0-Len的全部的集合（然后放到结果数组中）
  // 注意：不能重复（使用includes验证重复）
  let list = [];
  let tmp = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  
  for (let i = 1; i < len; i++) {
    let target = i;
    backTrack(list, tmp, nums, target);
  }
  // 这里对数组的每一项排序，然后去重一下
  for (let i = 0; i < list.length; i++) {
    list[i].sort((a, b) => {
      a > b ? 1 : -1;
    });
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i - 1] && list[i].toString() === list[i - 1].toString()) {
      list.splice(i, 1);
      i--;
    }
  }

  console.log(list)
  // 处理空数组和自己（也是子集）
  list.push([]);
  list.push(nums);
  return list;
};

// 辅助函数：回溯集合
var backTrack = function (list, tmp, nums, target) {
  if (tmp.length === target) {
    console.log(tmp);
    let item = [...tmp];
    // 这里需要先排序，然后去重？？？
    // 但是这样的复杂度明显上升了
    list.push(item);
    return;
  }
  // 这里有问题
  // [[],[1],[2],[1,2],[2,1],[1,2,2]]
  // [[],[1],[1,2],[1,2,2],[2],[2,2]]
  // 这里先把 nums 和 tmp 做个差集，然后遍历差集，再增加
  let arr = subSet(nums, tmp);
  // console.log(nums, tmp, arr);
  // 能否把这个开始的数字设置一下，每次都是0，效果很不好
  // 关键问题，arr 中有重复，所以不好设置这里的开始条件
  // [2,2]为什么没有进来？
  for (let i = 0; i < arr.length; i++) {
    tmp.push(arr[i]);
    backTrack(list, tmp, nums, target);
    tmp.pop();
  }
}

// 辅助函数：求两个数组的差集(但是不能去重啊)
var subSet = function(arr1, arr2) {
  var sub = [];
  for (let i= 0; i < arr1.length; i++) {
    let item = arr1[i];
    if (arr2.includes(item)) continue;
    sub.push(item);
  }
  return sub;
};

// @lc code=end

