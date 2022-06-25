/*
 * @lc app=leetcode.cn id=1268 lang=javascript
 *
 * [1268] 搜索推荐系统
 */

// Your runtime beats 30.43 % of javascript submissions
// @lc code=start
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
// 这个题目可以使用字典树，trie 做
// 也可以使用数组和字符串对比做
// 数组的长度是1000，搜索的长度也是1000，可能存在性能问题
// 先使用基础的方法完成一下
const suggestedProducts = function(products, searchWord) {
  // products 首先按照字典序排序一下，这样减少后面的计算
  const new_products = products.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  const productLen = new_products.length;

  const result = [];

  const getResult = function(search) {
    const tmp = [];
    const searchLen = search.length;
    for (let i = 0; i < productLen; i++) {
      if (new_products[i].slice(0, searchLen) === search) {
        tmp.push(new_products[i]);
      }
      if (tmp.length === 3) {
        break;
      }
    }
    return tmp;
  };

  const searchLen = searchWord.length;
  for (let i = 0; i < searchLen; i++) {
    const currentStr = searchWord.slice(0, i + 1);
    result.push(getResult(currentStr));
  }
  return result;
};
// @lc code=end

export { suggestedProducts };
