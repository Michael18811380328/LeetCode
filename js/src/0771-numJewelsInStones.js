// 771. 宝石与石头
//  给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
// J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。
// 示例 1:
// 输入: J = "aA", S = "aAAbbbb"
// 输出: 3
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  // 首先遍历S，创建一个字符串放权重
  // 然后遍历J，获取不同宝石对应的权重
  // 返回即可
  const hashTable = {};
  const sLen = S.length; const
    jLen = J.length;
  for (let i = 0; i < sLen; i++) {
    const item = S[i];
    if (!hashTable[item]) {
      hashTable[item] = 1;
    } else {
      hashTable[item]++;
    }
  }
  let sum = 0;
  for (let j = 0; j < jLen; j++) {
    const item = J[j];
    if (hashTable[item]) {
      sum += hashTable[item];
    }
  }
  return sum;
};
