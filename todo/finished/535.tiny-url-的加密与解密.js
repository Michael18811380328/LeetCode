/*
 * @lc app=leetcode.cn id=535 lang=javascript
 *
 * [535] TinyURL 的加密与解密
 */

// @lc code=start
// 思路：直接返回，或者向后移动Unicode都可以实现加密
// 如何把长URL变成短的？这是问题所在
// 或者调用JS内部的encode-decode函数
// 实际上可以使用随机值进行哈希加密

var encode = function(longUrl) {
  return encodeURI(longUrl);
};

var decode = function(shortUrl) {
  return decodeURI(shortUrl);
};

// 可以通过这样进行转换
// const DICT = {
//   0: 'a',
//   1: 'b',
//   2: 'c'
// };
// "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// @lc code=end

