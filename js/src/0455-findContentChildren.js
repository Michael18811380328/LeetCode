// 455. 分发饼干
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 示例 1:
// 输入: g = [1,2,3], s = [1,1]
// 输出: 1
// 解释:
// 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
// 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
// 所以你应该输出1。

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren1 = function(g, s) {
  // 可以按照从小到大的顺序排列，然后使用贪心算法，依次遍历数组，看是否满足
  const gLen = g.length;
  const sLen = s.length;
  if (gLen === 0 || sLen === 0) return 0;
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let result = 0;
  const getResult = (item) => {
    let index = 0;
    while (index < sLen) {
      if (s[index] >= item) {
        result++;
        s.splice(index, 1);
        return;
      } else {
        index++;
      }
    }
  };
  for (let i = 0; i < gLen; i++) {
    const item = g[i];
    getResult(item);
  }
  return result;
};

// 思路二 140 ms, 在所有 JavaScript 提交中击败了15.20%
const findContentChildren2 = function(g, s) {
  const gLen = g.length;
  const sLen = s.length;
  if (gLen === 0 || sLen === 0) return 0;
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let result = 0;
  let index = 0;
  for (let i = 0; i < sLen; i++) {
    if (s[i] >= g[index]) {
      index++;
      result++;
    }
  }
  return result;
};

export { findContentChildren1, findContentChildren2 };
