/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 448. 找到所有数组中消失的数字
// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
// 找到所有在 [1, n] 范围之间没有出现在数组中的数字
// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

// 示例:
// 输入:
// [4,3,2,7,8,2,3,1]
// 输出:
// [5,6]
// 172 ms, 在所有 JavaScript 提交中击败了36.87%

var findDisappearedNumbers = function(nums) {
    const n = nums.length;
    if (n === 1) return [];
    let newArr = [...new Set(nums)].sort((a, b) => a - b);
    const len = newArr.length;
    // 如果去重排序后，还和原来的一样，那么没有缺失，直接返回空数组(优化：不需要排序)
    if (len === n) return [];
    let pointer = 1;
    let result = [];
    for (let i = 0; i < len; i++) {
        if (pointer === newArr[i]) {
            pointer++;
        } else {
            result.push(pointer);
            pointer++;
            i--;
        }
    }
    // [1,1,1,1,1] => [2,3,4,5]
    while (pointer <= n) {
        result.push(pointer);
        pointer++;
    }
    return result;
};

// 思路1：先把这个数组去重，然后新建一个数组长度是N，然后依次填充
// 然后求一下这两个数组的差集
// 如果是每一个进行include查询，那么性能不太好

// 思路二：首先数组去重后排序，然后使用指针保存当前的元素，然后获取缺失的元素
// 这个思路应该比思路1好一点。
