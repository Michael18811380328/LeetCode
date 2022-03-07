// 1002. 查找常用字符
// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
// 你可以按任意顺序返回答案。

// 示例 1：
// 输入：["bella","label","roller"]
// 输出：["e","l","l"]

// 示例 2：
// 输入：["cool","lock","cook"]
// 输出：["c","o"]

/**
 * @param {string[]} A
 * @return {string[]}
 */
// 1 寻找长度最小的字符串（这样遍历比较好操作）循环一次
// 2 如何判断重复的次数？
// （如果最短字符串长度是5个，数组有100项，那么内循环就是4）
// 最好把最短字符串的全部内容提取到一个哈希表中，这样可以包含次数
// 能否判断一个字符串中，有多少个某个字符--这里写一个辅助函数

const string2dict = (str) => {
  const dict = {};
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (!dict[item]) {
      dict[item] = 1;
    } else {
      dict[item]++;
    }
  }
  return dict;
};

const getTimes = (str, key) => {
  let times = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === key) {
      times++;
    }
  }
  return times;
};

const commonChars = function(A) {
  const len = A.length;
  // 处理长度是0-1的特殊情况
  if (len === 0) {
    return [];
  } else if (len === 1) {
    return A[0], split('');
  }
  // 获取最短字符串
  let minIndex = 0;
  let minStrLen = A[0].length;
  for (let i = 0; i < len; i++) {
    if (A[i].length < minStrLen) {
      minStrLen = A[i].length;
      minIndex = i;
      // 如果有一个是空的字符串，那么直接返回空数字
      if (minStrLen === 0) {
        return [];
      }
    }
  }
  // 把最短字符串转换成一个字典
  const dict = string2dict(A[minIndex]);
  // console.log(dict);
  for (let j = 0; j < len; j++) {
    const item = A[j];
    for (const key in dict) {
      // 计算item中有几个key，然后更改字典
      const itemTimes = getTimes(item, key);
      dict[key] = Math.min(dict[key], itemTimes);
      if (dict[key] === 0) {
        delete dict[key];
      }
      // 现在是三重循环，性能很不好
      // 如果字典变成空的，那么直接退出
      if (JSON.stringify(dict) == '{}') return [];
    }
  }
  // console.log(dict);
  let result = [];
  for (const key in dict) {
    const value = dict[key];
    const arr = new Array(value).fill(key);
    result = result.concat(arr);
  }
  return result;
};
