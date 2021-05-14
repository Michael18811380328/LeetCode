/**
 * @param {number[]} nums
 * @return {number}
 * 求数组中唯一元素的和
 */

// 难度：简单
// 考点：数组遍历求和；对象求和；顺序结构转换成索引结构
// 76 ms, 在所有 JavaScript 提交中击败了86.27%
var sumOfUnique = function(nums) {
    let dict = {};
    let len = nums.length;
    // 先把数组遍历一次，记录在字典中
    for (let i = 0; i < len; i++) {
        let key = nums[i];
        if (!dict[key]) {
            dict[key] = 1;
        } else {
            dict[key]++;
        }
    }
    // 遍历字典：如果出现次数等于1，直接求和
    let sum = 0;
    for (let key in dict) {
        if (dict[key] === 1) {
            sum += parseInt(key);
        }
    }
    return sum;
};
