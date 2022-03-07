/*
 * [482] 密钥格式化
 * 注意：S 的长度可能很长，请按需分配大小。数组是否超出内存？
 */
// 188 ms, 在所有 JavaScript 提交中击败了46.81%
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function(S, K) {
  // 第一步，先去掉全部的破折号，正则
  let s = S.replace(/\-/g, '');
  // console.log(s);
  // 第二步，将小写转换成大写
  s = s.toUpperCase();
  if (s.length < K) {
    return s;
  }
  // 第三步，设置一个数组，然后从字符串后面不断截取 K 个字符，然后放在数组中 while 循环
  const arr = [];
  while (s.length > 0) {
    const tmp = s.slice(-K);
    s = s.slice(0, -K);
    arr.unshift(tmp);
  }
  // console.log(arr);
  // 第四步，将数组使用破折号链接起来成为字符串返回
  return arr.join('-');
};

// '5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-95F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-95F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-95F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-95F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-95F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9-w-5F3Z-2e-9'
