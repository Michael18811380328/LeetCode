/*
 * @lc app=leetcode.cn id=1282 lang=javascript
 *
 * [1282] 用户分组
 */

// Your runtime beats 31.91 % of javascript submissions
// @lc code=start
/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
  const len = groupSizes.length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    const item = {
      index: i,
      groupId: groupSizes[i],
    };
    arr.push(item);
  }
  arr.sort((a, b) => {
    return a.groupId > b.groupId ? 1 : -1;
  });
  const result = [];
  let temp = [];
  let currentID = arr[0].groupId;
  temp.push(arr[0].index);
  for (let i = 1; i < len; i++) {
    if (temp.length === currentID) {
      result.push([...temp]);
      temp = [];
      temp.push(arr[i].index);
      currentID = arr[i].groupId;
    } else if (arr[i].groupId === currentID) {
      temp.push(arr[i].index);
    } else {
      result.push([...temp]);
      temp = [];
      temp.push(arr[i].index);
      currentID = arr[i].groupId;
    }
  }
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
};
// @lc code=end
