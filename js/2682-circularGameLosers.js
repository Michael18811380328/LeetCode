/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let dict = {};
    dict[1] = true;
    let index = 1; // 当前球的位置
    // 循环，直到某个朋友接到球
    // 中间某个人接到球，就记录在字典中
    for (let i = 1; i < 10000; i++) {
        let time = i * k;
        index = (index + time) % n;
        // 如果转了一圈，就是最后一个数字
        if (index === 0) {
            index = n;
        }
        // 有人第二次接到球，游戏结束
        if (dict[index]) {
            break;
        } else {
            dict[index] = true;
        }
    }
    // 把全部字典的键遍历一次，然后求差值，就是结果数组
    let result = [];
    for (let i = 2; i <= n; i++) {
        if (!dict[i]) {
            result.push(i);
        }
    }
    return result;
};

// console.log(circularGameLosers(5, 2)); // [4,5]
// console.log(circularGameLosers(4, 4)); // [2,3,4]
// console.log(circularGameLosers(2, 1)); // []
// console.log(circularGameLosers(5, 3)); // [2,3]
