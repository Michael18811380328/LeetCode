/**
 * @param {number[]} cost
 * @return {number}
 2144. 打折购买糖果的最小开销
 难度简单，就是比较数组（贪心算法）
 * 56 ms, 在所有 JavaScript 提交中击败了95.32%
 */
var minimumCost = function(cost) {
    const len = cost.length;
    if (len === 1) {
        return cost[0];
    }
    if (len === 2) {
        return cost[0] + cost[1];
    }
    cost.sort((a, b) => {
        return a < b ? 1 : -1;
    });
    let res = 0;
    for (let i = 0; i < len; i += 2) {
        let a = cost[i];
        let b = cost[i + 1];
        let c = cost[i + 2];
        if (!a) {
            break;
        }
        if (!b) {
            res = res + a;
            break;
        }
        if (!c) {
            res = res + a + b;
            break;
        }
        // abc 都存在
        if (b >= c) {
            i++;   
        }
        res = res + a + b;
    }
    return res;
};