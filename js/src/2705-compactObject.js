/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject1 = function (obj) {
  // 基本思路：DFS 递归对象; 复杂对象超时
  const dfs = (node) => {
    if (typeof obj !== 'object') {
      return obj;
    }
    if (Array.isArray(node)) {
      for (let i = 0; i < node.length; i++) {
        if (!node[i]) {
          // 数组 splice 耗时
          node.splice(i, 1);
          i--;
        }
        // 如果是对象，直接递归
        else {
          dfs(node[i]);
        }
      }
    } else {
      // 这里存在性能问题
      for (const key in node) {
        if (!node[key]) {
          // 删除对象的键耗时
          delete node[key];
        }
        if (typeof node[key] === 'object') {
          dfs(node[key]);
        }
      }
    }
  };
  dfs(obj);
  return obj;
};

// https://leetcode.cn/problems/compact-object/description/
// 现在还是超时，需要看一下官方的方案是什么，自己哪一步存在性能问题

// console.log(compactObject([null, 0, false, 1]));
// 输出：[1]
// console.log(compactObject({ a: null, b: [false, 1] }));
// 输出：{"b": [1]}
// console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// 输出：[5, [], [16]]

// 思路2
const compactObject2 = function (obj) {
  if (obj == null) {
    return obj;
  }
  if (typeof obj !== 'object') {
    return obj;
  }
  // 改进后的方法，新建一个数组和对象，然后向内部填充
  if (Array.isArray(obj)) {
    const res = [];
    for (const value of obj) {
      const val = compactObject(value);
      if (val) {
        res.push(val);
      }
    }
    return res;
  } else {
    const res = {};
    for (const key of Object.keys(obj)) {
      const val = compactObject(obj[key]);
      if (val) {
        res[key] = val;
      }
    }
    return res;
  }
};

export { compactObject1, compactObject2 };
