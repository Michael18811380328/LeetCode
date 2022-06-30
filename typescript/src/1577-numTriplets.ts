/*
 * @lc app=leetcode.cn id=1577
 * [1577] 数的平方等于两数乘积的方法数
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 思路一，三层循环，性能很差
// function numTriplets(nums1: number[], nums2: number[]): number {
//   let foo = (arr1: number[], arr2: number[]): number => {
//     let sum: number = 0;
//     const arr3: number[] = arr2.map(item => Math.pow(item, 2));
//     const len: number = arr1.length;
//     const len3: number = arr3.length;
//     for (let i: number = 0; i < len; i++) {
//       for (let j: number = i + 1; j < len; j++) {
//         const curr: number = arr1[i] * arr1[j];
//         for (let k: number = 0; k < len3; k++) {
//           if (curr === arr3[k]) {
//             sum++;
//           }
//         }
//       }
//     }
//     return sum;
//   };
//   return foo(nums1, nums2) + foo(nums2, nums1);
// };

// 思路二：两层循环
function numTriplets(nums1: number[], nums2: number[]): number {
  const foo = (arr1: number[], arr2: number[]): number => {
    let sum = 0;
    // 获取字典和出现的个数(可能有重复)
    const arr3: number[] = arr2.map(item => Math.pow(item, 2));
    const dict: any = {};
    arr3.forEach(ele => {
      if (dict[ele]) {
        dict[ele]++;
      } else {
        dict[ele] = 1;
      }
    });
    const len: number = arr1.length;
    for (let i = 0; i < len; i++) {
      for (let j: number = i + 1; j < len; j++) {
        const curr: number = arr1[i] * arr1[j];
        if (dict[curr]) {
          sum += dict[curr];
        }
      }
    }
    return sum;
  };
  return foo(nums1, nums2) + foo(nums2, nums1);
}

export {numTriplets};
