/*
 * @lc app=leetcode.cn id=437 lang=javascript
 * 这个题目不算难，就是二叉树求路径的和，细心点就没问题
 * [437] 路径总和 III
 */
// var pathSum = function(root, sum) {
//   // 思路：因为开始和结束的位置可以是任何位置，还可能是负数等情况
//   // 1、把二叉树遍历一次，把全部的路径遍历出来放在一个数组中
//   let tmpList = [];
//   let runNode = (node, tmp) => {
//     if (!node) return;
//     tmp.push(node.val);
//     if (!node.left && !node.right) {
//       // 这是叶子节点
//       tmpList.push([...tmp]);
//       return;
//     }
//     runNode(node.left, [...tmp]);
//     runNode(node.right, [...tmp]);
//   };
//   runNode(root, []);
//   // console.log(tmpList);
//   // 2、遍历这个数组 tmpList 的每一项。然后每一项求出开始和结束的全部的和分别满足目标值
//   let count = 0;
//   let dict = {};
//   tmpList.forEach((arr) => {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       let tmp = 0;
//       for (let j = i; j < len; j++) {
//         tmp += arr[j];
//         if (tmp === sum) {
//           let key = String(arr.slice(0, i)) + String(arr.slice(i, j + 1));
//           // 这种没有标记左还是右（如果左右相同，那就不正确了）
//           if (!dict[key]) {
//             count++;
//             dict[key] = true;
//           }
//         }
//       }
//     }
//   });
//   return count;
//   // 开始的情况有N种，结束的情况有N种，那么二维遍历一下然后求和？
// };

// 深度优先搜索二叉树
// 链接：https://leetcode.cn/problems/path-sum-iii/solutions/1021296/lu-jing-zong-he-iii-by-leetcode-solution-z9td/
const pathSum = function(root, targetSum) {
  if (root == null) {
    return 0;
  }
  // 辅助函数
  const rootSum = (root, targetSum) => {
    let ret = 0;
    if (root == null) {
      return 0;
    }
    const val = root.val;
    if (val === targetSum) {
      ret++;
    }
    ret += rootSum(root.left, targetSum - val);
    ret += rootSum(root.right, targetSum - val);
    return ret;
  };

  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};

export { pathSum };
