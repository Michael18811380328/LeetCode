/**
 * @param {number[][]} dungeon
 * @return {number}
 */
// 这个办法是计算出怎么样的路径，到达最后的结果是最大值，不满足题目要求；因为题目要求是最小的血量，应该反向动态规划
// https://leetcode.cn/problems/dungeon-game/solutions/326904/fei-dp-xiang-jie-dfsjie-fa-yi-ji-ta-de-you-hua-by-/
// 确实比较复杂，还需要考虑当前节点是正负号，然后记忆化检索

// 参考思路：递归
// 1、反向的动态规划（从最后一个节点开始规划，然后一直计算到第一个节点）
// 2、处理当前节点的正负号——先确定向下和向右的情况的最小消耗的血量，然后和当前节点的值做比较，如果当前是负数，继续增加最小值
// 如果当前是正数，且大于最小值，那么就设置当前的值为1
const calculateMinimumHP = function(dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  const dict = {};
  function getValue(a, b) {
    return dict[`${a}-${b}`];
  }
  function setValue(a, b, value) {
    dict[`${a}-${b}`] = value;
  }

  // 返回走到某个位置需要的最小血量
  const minHP = (i, j) => {
    // 递归的结束点（右下角的点）
    if (i === m - 1 && j === n - 1) {
      // 如果节点大于0，那么加血，只要满足1点血即可；否则减血，返回 1 - 减血值
      const value = dungeon[m - 1][n - 1] > 0 ? 1 : 1 - dungeon[m - 1][n - 1];
      setValue(i, j, value);
      return value;
    }
    // 先从缓存中判断
    if (getValue(i, j) > 0) {
      return getValue(i, j);
    }
    let goDown = Infinity;
    let goRight = Infinity;
    // 计算向下一格消耗的最小血量
    if (i < m - 1) {
      goDown = minHP(i + 1, j);
    }
    // 计算向右一格消耗的最小血量
    if (j < n - 1) {
      goRight = minHP(i, j + 1);
    }
    // 计算当前单元格，向下或者向右最小消耗的血量
    const goMin = Math.min(goDown, goRight);
    // 这里是关键，递归过程中需要判断，不是单纯的递归计算
    const value = dungeon[i][j] >= goMin ? 1 : goMin - dungeon[i][j];
    setValue(i, j, value);
    return value;
  };
  return minHP(0, 0);
};

// const dungeon1 = [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]];
// console.log(calculateMinimumHP(dungeon1));

// 自己的思路不行（不满足题目要求），仅供参考
// 可以使用两次动态规划计算出俩
// 第一次计算走到当前位置需要的点数
// 第二次计算当前路径下，消耗的最小点数
// var calculateMinimumHP1 = function(dungeon) {
//   // 递推公式
//   // F(a, b) = A(a, b) + Math.max(F(a - 1, b), F(a, b - 1));
//   // 二维矩阵处理：先把第一行和第一列的值计算出来，然后计算剩余全部节点的值
//   // 已有的值缓存在对象中，避免二次计算

//   // 处理特殊情况只有一个单元格
//   if (dungeon.length === 1 && dungeon[0].length === 1) {
//     return 0 - dungeon[0][0] + 1;
//   }

//   // 准备空对象，存储某个节点的位置
//   let dict = {};

//   // 辅助函数：获取或者设置某个节点的值
//   function getValue(a, b) {
//     const key = `${a}-${b}`;
//     return dict[key];
//   }
//   function setValue(a, b, value) {
//     const key = `${a}-${b}`;
//     dict[key] = value;
//   }

//   // 第一个元素的值
//   setValue(0, 0, dungeon[0][0]);

//   // 计算第一行的值
//   for (let i = 0; i < dungeon.length; i++) {
//     let lineOne = dungeon[0];
//     for (let j = 1; j < lineOne.length; j++) {
//       let value = lineOne[j] + getValue(0, j - 1);
//       setValue(0, j, value);
//     }
//   }
//   // console.log(dict);
//   // 计算第一列的值
//   for (let i = 1; i < dungeon.length; i++) {
//     let value = dungeon[i][0] + getValue(i - 1, 0);
//     setValue(i, 0, value);
//   }
//   // console.log(dict);
//   // 计算剩余单元格的值
//   for (let i = 1; i < dungeon.length; i++) {
//     for (let j = 1; j < dungeon[0].length; j++) {
//       // F(a, b) = A(a, b) + Math.max(F(a - 1, b), F(a, b - 1));
//       let value = dungeon[i][j] + Math.max(getValue(i, j - 1), getValue(i - 1, j));
//       setValue(i, j, value);
//     }
//   }
//   // // 目前算出来的是到最后一个格子最大的结果，但是要求过程中的最小值
//   // console.log(dict);
//   // 返回右下角的结果(最后结果需要加1)
//   return getValue(dungeon.length, dungeon[0].length);
// };

// 其他的思路，完全动态规划实现，这个和上面自己的想法类似，倒推动态规划
const calculateMinimumHP2 = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  // 初始化一个二维数组来存储所需的最小生命值
  const dp = Array.from({ length: m }, () => new Array(n));
  // 初始化右下角单元格
  dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);
  // 初始化最右侧一列
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
  }
  // 初始化最下面一行
  for (let j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - dungeon[m - 1][j]);
  }
  // 填充其余的单元格
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      const minNext = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(1, minNext - dungeon[i][j]);
    }
  }
  return dp[0][0];
};

export { calculateMinimumHP, calculateMinimumHP2 };
