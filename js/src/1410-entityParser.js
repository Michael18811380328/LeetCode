/*
 * @lc app=leetcode.cn id=1410 lang=javascript
 *
 * [1410] HTML 实体解析器
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
// 第一种思路：直接把text使用正则表达式替换，注意 &quot; 的转移符
// 116 ms, 在所有 JavaScript 提交中击败了93.22%
const entityParser = function(text) {
  return text.replace(/&quot;/ig, '\"').replace(/&apos;/ig, '\'').replace(/&gt;/ig, '>').replace(/&lt;/ig, '<')
    .replace(/&frasl;/ig, '/')
    .replace(/&amp;/ig, '&');
};

// 第二种思路：遍历字符串，然后判断栈顶的是否是特殊的字符串，然后替换
// @lc code=end

export { entityParser };
