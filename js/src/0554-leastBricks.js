/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */
/**
 * @param {number[][]} wall
 * @return {number}
 */
// Your runtime beats 89.16 % of javascript submissions
const leastBricks = function(wall) {
// 遍历每一个子数组，获取砖头缝的位置，并写到对象中
// 然后找到数量最多的砖缝，使用层数减去砖缝数量，就是最少穿过的砖的数量
  const dict = {};
  let max = 0;
  const rowLen = wall.length;
  for (let i = 0; i < rowLen; i++) {
    const row = wall[i];
    let initKey = 0;
    const cellLen = row.length;
    for (let j = 0; j < cellLen - 1; j++) {
      const item = row[j];
      initKey += item;
      dict[initKey] ? dict[initKey]++ : dict[initKey] = 1;
      max = dict[initKey] > max ? dict[initKey] : max;
    }
  }
  return rowLen - max;
};

export { leastBricks };
