/**
 * @param {string} word
 * @return {number}
 */
// [2062] 统计字符串中的元音子字符串
// 正则匹配-这个性能更好，不需要循环全部的子字符串，不过双循环内部 includes 可以优化
// Your runtime beats 44.44 % of javascript submissions
const countVowelSubstrings = function(word) {
  /**
   * 辅助函数：判断一个字符串是否是满足条件的字符串
   * @param {string} str 输入的字符串
   * @returns boolean 返回是否满足要求
   */
  const checkStr = (str) => {
    // 如果长度小于5，那么肯定不满足
    if (str.length < 5) {
      return false;
    }
    // 因为已经用正则去掉了辅音部分，所以这里不考虑，直接判断元音
    if (str.includes('a') && str.includes('e') && str.includes('i') && str.includes('o') && str.includes('u')) {
      return true;
    }
    return false;
  };

  // 如果长度小于5，直接返回0
  if (word.length < 5) {
    return 0;
  }
  // 1. 获取满足的全部字符串数组
  const word_arr = word.match(/[aeiou]+/g);
  // 如果没有满足的字符串数组，结果是null，直接返回0
  if (!word_arr) {
    return 0;
  }

  // 2. 筛选全部子字符串
  let times = 0;
  const cache = {};
  word_arr.forEach((current) => {
    const len = current.length;
    // 子字符串长度必须大于4
    if (len > 4) {
      // 双指针双重循环，判断每一个子字符串是否满足要求
      for (let start = 0; start <= len; start++) {
        for (let end = start + 5; end <= len; end++) {
          const inner = current.slice(start, end);
          // 先从缓存中获取，避免多次计算相同的子字符串
          if (cache[inner]) {
            if (cache[inner] === 1) {
              times++;
            }
          }
          // 如果缓存中没有，计算并存放到缓存中
          else {
            const res = checkStr(inner);
            if (res === true) {
              times++;
              cache[inner] = 1; // 1 表示满足
            } else {
              cache[inner] = 2; // 2 表示不满足
            }
          }
        }
      }
    }
  });
  return times;
};

export { countVowelSubstrings };
