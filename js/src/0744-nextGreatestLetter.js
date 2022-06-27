/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
// 104 ms
// , 在所有 JavaScript 提交中击败了
// 20.94%
//

// 方法一有问题
// const nextGreatestLetter = function(letters, target) {
//   const tar = target.charCodeAt(0);
//   if (letters[0].charCodeAt(0) > tar ||
//     letters[letters.length - 1].charCodeAt(0) <= tar
//   ) {
//     return letters[0];
//   }
//   if (letters[0].charCodeAt(0) === tar) {
//     return letters[1];
//   }
//   // 否则，进行二分查找
//   let start = 0;
//   let end = letters.length - 1;
//   while (start < end) {
//     let middle = Math.floor((start + end) / 2);
//     if (letters[middle].charCodeAt(0) > tar) {
//       end = middle;
//     }
//     else if (letters[middle].charCodeAt(0) < tar) {
//       start = middle;
//     }
//     else {
//       return letters[middle + 1];
//     }
//   }
//   return letters[end];
// };

const nextGreatestLetter = function(letters, target) {
  const tar = target.charCodeAt(0);
  if (letters[0].charCodeAt(0) > tar
    || letters[letters.length - 1].charCodeAt(0) <= tar
  ) {
    return letters[0];
  }
  const index = letters.lastIndexOf(target);
  if (index > -1) {
    return letters[index + 1];
  }
  let start = 0;
  let end = letters.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (!(letters[mid].charCodeAt(0) < tar && letters[mid + 1].charCodeAt(0) > tar)) {
    if (letters[mid].charCodeAt(0) > tar) {
      end = mid;
    } else {
      start = mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return letters[mid + 1];
};
// @lc code=end
