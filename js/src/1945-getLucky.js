/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 问题可以转换成两个小问题
// 1 把字符串根据 code 转换成数字字符串（循环）
// 2 计算数字字符串的每一位的和（递归）
// Your runtime beats 94.92 % of javascript submissions
const getLucky = function(s, k) {
  /**
   * 1 辅助函数：字符串转换成数字字符串
   * @param {string} str 输入的字符串
   * @returns 处理后的数值字符串
   */
  const transStr = (str) => {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      const curr = s[i].charCodeAt(0) - 96;
      res += curr;
    }
    return res;
  };

  /**
   * 2 计算字符串数值的每一位的和
   * @param {string} str 输入的数值字符串
   * @returns 返回数值字符串
   */
  const getNumber = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += (1 * str[i]);
    }
    return `${result}`;
  };

  // 3调用函数递归计算
  let resultStr = transStr(s);
  while (k > 0) {
    resultStr = getNumber(resultStr);
    k--;
  }
  return resultStr * 1;
};

// 特殊情况
// getLucky("dbvmfhnttvr", 5)
// 42221368142020220 / 10 返回值是 4222136814202022.5
// 如果数字很大，除法计算有问题，直接解析字符串，不要使用除法

// @lc code=end

export { getLucky };
