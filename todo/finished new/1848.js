/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
// 这样时间复杂度不好
// 84 ms, 在所有 JavaScript 提交中击败了60.66%
var getMinDistance2 = function(nums, target, start) {
    const len = nums.length;
    let min = len;
    for (let i = 0; i < len; i++) {
        if (nums[i] === target) {
            let tmpAbs = Math.abs(i - start);
            if (tmpAbs < min) {
                min = tmpAbs;
            }
        } 
    }
    return min;
};


// 改进
// 68 ms, 在所有 JavaScript 提交中击败了97.81%
// 改进后效果还行
var getMinDistance = function(nums, target, start) {
  if (nums[start] === target) {
    return 0;
  }
  let arr1 = nums.slice(0, start + 1).reverse();
  let arr2 = nums.slice(start);
  const len = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < len; i++) {
    if (arr1[i] === target || arr2[i] === target) {
      return i;
    }
  }
};

console.log(getMinDistance([1,2,3,4,5], 5, 3) === 1);
console.log(getMinDistance([1], 1, 0) === 0);
console.log(getMinDistance([1,1,1,1,1,1,1,1,1,1], 1, 0) === 0);
console.log(getMinDistance([5,3,6], 5, 2) === 2);
console.log(getMinDistance([1,2,3,4,4,4,4,4,32,5,2,3,2,5,5,5,5,34,5,6,2,15], 2, 8) === 2);
