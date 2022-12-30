/**
 * 279 完全平方数
 * https://leetcode.cn/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 * Your runtime beats 89.32 % of ss submissions
 */
const numSquares = function(n) {
  const list = [];
  // 第一个表示当前的数字，第二个表示需要的数量
  list.push([n, 0]);
  // 把当前节点存储到缓存中，优化性能
  const map = new Map();
  map.set(n, true);
  // 广度优先循环，遍历图节点
  while (list.length > 0) {
    const current = list.shift();
    const [num, times] = current;
    // 注意：这里不能写 i < num，如果 n 是 0，这里也需要能进入
    // 因为 n = 1 比较特殊，可以直接开头把这个情况处理掉
    for (let i = 1; ; i++) {
      const newNum = num - i ** 2;
      if (newNum < 0) {
        break;
      }
      if (newNum === 0) {
        return times + 1;
      }
      // 把遍历到的数字，记录到字典中，可以节省大量性能
      if (!map.get(newNum)) {
        list.push([newNum, times + 1]);
        map.set(newNum, true);
      }
    }
  }
};

export { numSquares };
