/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  // 思路：因为开始和结束的位置可以是任何位置，还可能是负数等情况
  // 1、把二叉树遍历一次，把全部的路径遍历出来放在一个数组中
  let tmpList = [];
  let runNode = (node, tmp) => {
    if (!node) return;
    tmp.push(node.val);
    if (!node.left && !node.right) {
      // 这是叶子节点
      tmpList.push([...tmp]);
      return;
    }
    runNode(node.left, [...tmp]);
    runNode(node.right, [...tmp]);
  };
  runNode(root, []);
  // console.log(tmpList);
  // 2、遍历这个数组 tmpList 的每一项。然后每一项求出开始和结束的全部的和分别满足目标值
  let count = 0;
  let dict = {};
  tmpList.forEach((arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let tmp = 0;
      for (let j = i; j < len; j++) {
        tmp += arr[j];
        if (tmp === sum) {
          let key = String(arr.slice(0, i)) + String(arr.slice(i, j + 1));
          // 这种没有标记左还是右（如果左右相同，那就不正确了）
          if (!dict[key]) {
            count++;
            dict[key] = true;
          }
        }
      }
    }
  });
  return count;
  // 开始的情况有N种，结束的情况有N种，那么二维遍历一下然后求和？
  // 这样性能可能不太好~~~
};

// [10,5,5,3,2,null,3,3,-2,null,1]
// 8
// 结果不正确
// @lc code=end

