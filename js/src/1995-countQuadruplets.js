// 1995. 统计特殊四元组
// 给你一个 下标从 0 开始 的整数数组 nums ，返回满足下述条件的 不同 四元组 (a, b, c, d) 的 数目 ：
// nums[a] + nums[b] + nums[c] == nums[d] ，且a < b < c < d
// 链接：https://leetcode-cn.com/problems/count-special-quadruplets

// 思路1：先遍历一次数组，获取 value - index arr 的对象
// 因为数组的长度小于50，使用两层或者三层遍历也是可行的
// 数组的范围0-100，能否使用桶排序？
// 然后三层遍历，然后求和，看是否满足当前的值(实际4层循环)

// 88 ms 在所有 JavaScript 提交中击败了57.48%
/**
 * @param {number[]} nums
 * @return {number}
 */
const countQuadruplets = function (nums) {
  let max = nums[0];
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    // 求出最大值
    if (max < curr) {
      max = curr;
    }
    // 放在字典中
    if (!dict[curr]) {
      dict[curr] = [i];
    } else {
      dict[curr].push(i);
    }
  }
  // 三重循环
  let result = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    // （可以先求一个最大值，如果已经超过最大值，那么继续下一层循环）
    // 如果已经大于最大值，继续循环
    if (nums[i] >= max) {
      continue;
    }
    for (let j = i + 1; j < len; j++) {
      // 如果已经大于最大值，继续循环
      if (nums[i] + nums[j] >= max) {
        continue;
      }
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        // 如果字典中没有这个值，继续循环
        if (!dict[sum]) {
          continue;
        }
        const sumList = dict[sum];
        // 这里的循环能否避免
        // sumList 是一个递增的数组
        sumList.forEach((item) => {
          if (item > k) {
            result++;
          }
        });
      }
    }
  }
  return result;
};

export { countQuadruplets };

// console.log(countQuadruplets([1,2,3,6]));
// console.log(countQuadruplets([3,3,6,4,5]));
// console.log(countQuadruplets([1,1,1,3,5]));
// console.log(countQuadruplets([1,2,3,6,1,1,1,3,5,1,1,1,3,5,1,1,1,3,5,1,1,1,3,5]));

// 思路2
// 如果先把数组排序一下，这样看一下
// 先对数组实现桶排序，范围1-100，然后每一项存储出现的位置
// 然后再操作字典，这样最后匹配的就是4个数组，直接数组的长度相乘——需要检测不会重复

// const countQuadruplets2 = function(nums) {
//   const len = nums.length;
//   let dict = {};
//   let max = nums[0];
//   // 每一项不需要数组，直接计数就行
//   for (let i = 0; i < nums.length; i++) {
//     let curr = nums[i];
//     if (!dict[curr]) {
//       dict[curr] = [i];
//     } else {
//       dict[curr].push(i);
//     }
//     // 更新最大值
//     if (max < curr) max = curr;
//   }
//   // 先排序去重，然后再乘法计算
//   let newArr = [...new Set(nums)].sort((a, b) => a - b > 0 ? 1 : -1);
//   let result = 0;

//   for (let i = 0; i < newArr.length; i++) {
//     for (let j = i + 1; j < newArr.length; j++) {
//       for (let k = j + 1; k < newArr.length; k++) {
//         // sum 有7个情况（newArr[i] * 2+ newArr[k];）这就比较麻烦
//         let sum = newArr[i] + newArr[j] + newArr[k];
//         if (sum > max) {
//           break;
//         }
//         // 如果字典中有这个值，计算个数
//         if (dict[sum]) {
//           result += (dict[newArr[i]].length * dict[newArr[j]].length * dict[newArr[k]].length * dict[sum].length);
//         }
//       }
//     }
//   }
//   return result;
// }
