// 在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。

// 你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。

// 如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。

// 说明:

// 如果题目有解，该答案即为唯一答案。
// 输入数组均为非空数组，且长度相同。
// 输入数组中的元素均为非负数。
// 示例 1:

// 输入:
// gas  = [1,2,3,4,5]
// cost = [3,4,5,1,2]
// 输出: 3

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// 思路一
// 外循环中遍历gas，然后设置一个辅助函数，判断这个节点开始，能否返回原始的地点
// 这样的算法能否改进

// 思路二：先计算在不同加油站剩余的油料，然后计算获取一个新的数组，
// 然后遍历这个数组，如果从某个节点循环一次，结果累计大于0，那么这个结果就是正确的结果
// 这样的效率比方法一好一些

function canComplete(leftArr) {
  let sum = 0;
  const len = leftArr.length;
  leftArr.forEach((item) => sum += item);
  // 首先计算结果：如果总和小于0，那么一定不能环形行驶一圈
  if (sum < 0) {
    return -1;
  }
  // 结果清零
  sum = 0;
  // 剩下的情况，就是可以环形行驶的一圈
  for (let i = 0; i < len; i++) {
    // 这里能否优化节省内存？
    const tmpArr = [].concat(leftArr.slice(i, len)).concat(leftArr.slice(0, i));
    for (let j = 0; j < len; j++) {
      sum += tmpArr[j];
      if (sum < 0) {
        break;
      }
    }
    if (sum >= 0) {
      return i;
    }
    sum = 0;
  }
}

// 312 ms, 在所有 javascript 提交中击败了8.65%
// 算法很不好
function canCompleteCircuit(gas, cost) {
  const len = gas.length;
  const leftover = new Array(len);
  for (let i = 0; i < len; i++) {
    leftover[i] = gas[i] - cost[i];
  }
  return canComplete(leftover);
}

export { canCompleteCircuit };
