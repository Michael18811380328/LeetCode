// 给定一个整数，将其转化为7进制，并以字符串形式输出。

// 示例 1:
// 输入: 100
// 输出: "202"
// 示例 2:
// 输入: -7
// 输出: "-10"
/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function(num) {
  // 处理一下0
  if (num < 7 && num > -7) return String(num);
  // 处理一下负数
  const isMinus = !!(num < 0);
  num = isMinus ? -num : num;
  // 计算结果，辅助函数
  const res = base7(num);
  return isMinus ? `-${res}` : res;
  // 最后转换成字符串输出
};

const base7 = function(num) {
  if (num < 7) return String(num);
  const remain = num % 7;
  const tmp = (num - remain) / 7;
  return base7(tmp) + String(remain);
};
