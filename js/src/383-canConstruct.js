/*
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 104 ms, 在所有 JavaScript 提交中击败了 74.19%
const canConstruct = function(ransomNote, magazine) {
  // 遍历两个数组，然后获取字典，看字典中出现的数量是否满足
  const l1 = ransomNote.length;
  const l2 = magazine.length;
  if (l1 > l2) {
    return false;
  }
  let dict2 = {};
  for (let i = 0; i < l2; i++) {
    let key = magazine[i];
    if (dict2[key]) {
      dict2[key]++;
    } else {
      dict2[key] = 1;
    }
  }
  let dict1 = {};
  for (let j = 0; j < l1; j++) {
    let key = ransomNote[j];
    if (dict1[key]) {
      dict1[key]++;
    } else {
      dict1[key] = 1;
    }
    if (!dict2[key] || dict1[key] > dict2[key]) {
      return false;
    }
  }
  return true;
};

export { canConstruct };
