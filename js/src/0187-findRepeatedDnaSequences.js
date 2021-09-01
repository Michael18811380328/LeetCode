// findRepeatedDnaSequences
// 所有 DNA 都由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。
// 编写一个函数来查找 DNA 分子中所有出现超过一次的 10 个字母长的序列（子串）。
// 示例：
// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC", "CCCCCAAAAA"]
/**
 * @param {string} s
 * @return {string[]}
 */

//  思路1
// 现在外部一个includes,然后内部两个index
// 性能很差；超出时间限制
function findRepeatedDnaSequences1(s) {
  if (s.length <= 10) return [];
  const result = [];
  for (let i = 0; i < s.length - 10; i++) {
    const start = i;
    const end = i + 10;
    const item = s.slice(start, end);
    // 这里直接push，最后去重处理
    // 正则的性能更差
    // 先放在一个字典中，直接获取键值，性能更好（比查询数组好）
    if (!result.includes(item)) {
      const index = s.indexOf(item);
      // 这一步不需要获取index（直接外部一个循环，可以获取lastindex）
      if (s.indexOf(item, index + 1) > -1) {
        result.push(item);
      }
    }
  }
  return result;
}

// 思路2
// 改进版: 减少一层index，减少includes
// 现在还是超出时间限制 // 不能遍历两次
function findRepeatedDnaSequences2(s) {
  if (s.length <= 10) return [];
  const result = {};
  for (let i = 0; i < s.length - 10; i++) {
    const start = i;
    const end = i + 10;
    const item = s.slice(start, end);
    if (!result[item]) {
      if (s.indexOf(item, i + 1) > -1) {
        result[item] = true;
      }
    }
  }
  const resultArr = [];
  // for (const key in result) {
  //   if (result.hasOwnProperty(key)) resultArr.push(key);
  // }
  return resultArr;
}

// 思路3
// 然后循环子串的长度（一次循环）
// 把不同的子串的情况，截取出来，然后内置一个哈希表，看出现次数是否超过两次
// 然后放入结果数组中，这样不需要 indexOf 操作，大大减少复杂度，可以试试
/**
 * @param {string} s
 * @return {string[]}
 */
// 执行用时：
// 176 ms, 在所有 JavaScript 提交中击败了13.03%
var findRepeatedDnaSequences = function(s) {
  const resultArr = [];
  if (s.length <= 10) {
    return resultArr;
  }
  let hash = {};
  let start = 0;
  while (start < s.length - 9) {
    let end = start + 10;
    const item = s.slice(start, end);
    if (hash[item] > 0) {
      if (hash[item] === 1) {
        resultArr.push(item);
      }
      hash[item] = 2;
    } else {
      hash[item] = 1;
    }
    start++;
  }
  return resultArr;
};

export { findRepeatedDnaSequences, findRepeatedDnaSequences1, findRepeatedDnaSequences2 };
