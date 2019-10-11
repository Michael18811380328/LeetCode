// 18 四数之和
// 给定一个包含 n 个整数的数组 nums（有重复值） 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。答案中不可以包含重复的四元组。

// 思路一：暴力循环4次，这样可以数组的内部四个数的全部子集。时间复杂度极高，不使用
// 思路二：四个数的和，分解成两个数的和，两个数的和。这两个和加起来的目标就是4。
// 这样先进行n2遍历，获取前两个数的和，然后计算余下的 n - 2 个数，获取两个，然后输出。 
// 1748 ms, 在所有 JavaScript 提交中击败了 6.30% 的用户
// 时间复杂度的问题：主要是大量的数据转化，以及多重循环

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

  // 先计算两个数的和数组，把四个数的和问题转化成两个数的和问题，降维减少时间复杂度
  let twoSumArr = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let obj = {};
      obj.x = i;
      obj.y = j
      obj.twoSum = nums[i] + nums[j];
      // 这里最好过滤一下，如果和已有的重复，就不需要加入
      twoSumArr.push(obj);
    }
  }
 
  // 遍历这个和矩阵，如果和是目标，那么把对应的项数放到一个新的数组中
  let resultArr = [];
  const len2 = twoSumArr.length;
  for (let i = 0; i < len2; i++) {
    for (let j = i; j < len2; j++) {
      if ((twoSumArr[i].twoSum + twoSumArr[j].twoSum) === target) {
        let set = new Set([twoSumArr[i].x, twoSumArr[i].y, twoSumArr[j].x, twoSumArr[j].y]);
        if (set.size === 4) {
          // 这四个数都不等，才不会重用数字;现在可以保证项数不重复；但是原始数组中可能有重复的元素，例如0出现了两次
          let arr = [nums[twoSumArr[i].x], nums[twoSumArr[i].y], nums[twoSumArr[j].x], nums[twoSumArr[j].y]];
          // 然后，二维数组排序后，转化成字符串去重
          let arrStr = arr.sort().join(',');
          if (!resultArr.includes(arrStr)) {
            resultArr.push(arrStr);
          }
        }
      }
    }
  }

  // 结果数组转化成二维数组（升维）
  for (let i = 0; i < resultArr.length; i++) {
    resultArr[i] = resultArr[i].split(',');
  }

  return resultArr;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));