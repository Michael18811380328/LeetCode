// 93 restoreIpAddresses 复原IP地址

// 方法一：有缺陷的回溯算法
// 执行用时：108 ms 13.96% + 40.7 MB 5.91%
// 辅助函数: 判断IP某一位是否有效
function isValid(num) {
  if (num === '' || (num.length > 1 && num[0] === '0')) {
    return false;
  }
  const tmp = Number(num);
  return tmp >= 0 && tmp <= 255;
}

/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses1(s) {
  const resArr = [];
  const judge = function (arr, str) {
    // 如果全部满足，那么直接把IP放入结果数组中（0,255）字符串
    if (arr.length === 4 && str.length === 0) {
      const resStr = arr.join('.');
      if (!resArr.includes(resStr)) {
        resArr.push(resStr);
      }
    }
    if (str === '' || arr.length > 4) {
      return;
    }
    // 步骤一：使用回溯算法计算出全部的可能的字符串情况
    // 如果是有效的IP，那么就继续，如果不是有效的IP，就回溯
    if (isValid(str.slice(0, 1))) {
      const newArr = [...arr, str.slice(0, 1)];
      judge(newArr, str.slice(1));
    }
    if (isValid(str.slice(0, 2))) {
      const newArr = [...arr, str.slice(0, 2)];
      judge(newArr, str.slice(2));
    }
    if (isValid(str.slice(0, 3))) {
      const newArr = [...arr, str.slice(0, 3)];
      judge(newArr, str.slice(3));
    }
  };
  judge([], s);
  return resArr;
}

// 方法二：改进后的算法
// 92 ms 60.98%;40.2 MB 7.83%
function restoreIpAddresses(s) {
  const resArr = [];
  const judge = function (arr, str) {
    const len = arr.length;
    // 数组长度大于4，无效;数组长度等于4，字符串不是空，无效
    if (len > 4 || (len === 4 && str !== '')) {
      return;
    }
    // 数组长度等于4，字符串是空，有效
    if (len === 4 && str === '') {
      const resStr = arr.join('.');
      // 这里为什么会有重复的部分？需要处理
      // 这个很关键，严重影响性能，这里需要改进
      if (!resArr.includes(resStr)) {
        resArr.push(resStr);
      }
      return;
    }
    // 数组长度小于4，递归调用（执行回溯）
    // 改进：这里可以过滤剩余的字符串
    // 现在每次都新建数组，性能不好，不规范的回溯
    let temp;
    let remain;
    // 情况1
    temp = str.slice(0, 1);
    remain = str.slice(1);
    if (isValid(temp) && remain.length <= (4 - len) * 3) {
      const newArr = [...arr, temp];
      judge(newArr, remain);
    }
    // 情况2
    temp = str.slice(0, 2);
    remain = str.slice(2);
    if (isValid(temp) && remain.length <= (4 - len) * 3) {
      const newArr = [...arr, temp];
      judge(newArr, remain);
    }
    // 情况3
    temp = str.slice(0, 3);
    remain = str.slice(3);
    if (isValid(temp) && remain.length <= (4 - len) * 3) {
      const newArr = [...arr, temp];
      judge(newArr, remain);
    }
  };
  judge([], s);
  return resArr;
}

export { restoreIpAddresses, restoreIpAddresses1 };
