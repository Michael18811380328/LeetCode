/*
 * @lc app=leetcode.cn id=1971 lang=javascript
 *
 * [1971] 寻找图中是否存在路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
// 广度优先遍历和图的基本操作
// Your runtime beats 13.04 % of javascript submissions
var validPath = function(n, edges, start, end) {
  // 如果只有一个节点，那么就是连通的，返回真
  if (n === 1) {
    return true;
  }
  // 先把图中节点的邻接关系，遍历一次，线性关系转换成字典关系
  let dict = {};
  for (let i = 0; i < edges.length; i++) {
    let key = edges[i][0];
    let value = edges[i][1];
    // 无向图，双向加入
    if (!dict[key]) {
      dict[key] = [];
    }
    dict[key].push(value);
    if (!dict[value]) {
      dict[value] = [];
    }
    dict[value].push(key);
  }
  // console.log(dict);
  // 然后找到开始的 start 节点，广度优先遍历
  // 如果开始节点是一个孤立节点，直接返回 false
  if (!dict[start]) {
    return false;
  }
  let tmp = []; // 这里是BFS的节点
  let runed_map = {}; // 这个是已经遍历的节点
  // 广度优先遍历时，记录已经遍历过的节点
  runed_map[start] = true;
  if (dict[start].includes(end)) {
    return true;
  }
  tmp.push(...dict[start]);
  // 开始循环
  while (tmp.length > 0) {
    // 如果遇到到已经遍历的节点，直接跳过（图中的环）
    let current = tmp.shift();
    runed_map[current] = true;
    // forEach()本身无法跳出循环，必须遍历所有的数据才能结束。
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    if (dict[current]) {
      for (let i = 0; i < dict[current].length; i++) {
        let item = dict[current][i];
        // forEach 循环中返回值
        if (item === end) {
          return true;
        }
        if (!runed_map[item]) {
          tmp.push(item);
        }
      }
    }
  }
  // 如果当前的节点的流已经遍历完，那么不是连通的路径
  return false;
};

// @lc code=end

