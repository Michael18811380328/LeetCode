// 349. 两个数组的交集
// 给定两个数组，编写一个函数来计算它们的交集。

 

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
 

// 说明：

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

function intersection(nums1: number[], nums2: number[]): number[] {
    let arr1:number[] = Array.from(new Set(nums1));
    let arr2:number[] = Array.from(new Set(nums2));
    let result:number[] = [];
    let i:number;
    for (let i = 0; i < arr1.length; i++) {
        const item:number = arr1[i];
        if (arr2.includes(item)) {
        result.push(item);
        }
    }
    return result;
};
