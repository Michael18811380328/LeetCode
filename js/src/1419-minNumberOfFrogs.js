/*
 * @lc app=leetcode.cn id=1419 lang=javascript
 *
 * [1419] 数青蛙
 */

// @lc code=start
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
// 54/55 cases passed (N/A)
// -1？
// crakkoocaaoarkcrcrorccaooakrakoocccooarokkrraokrkkcakororcrookaaoarckrckkaarkacorrakckaroocacccaaoaakkkkorkarcoaoaaccckcaocookkckkcrkcckkracocoarkorarookccarrocraaocacarorcoorkcracaarorarroarrccrcrcaccooackcaakckokkkkoaorcckakacccorkaarrkakcakcrorkccrrrkoacorcacrkakocorroakokkrrkkakrrckokacarorckracrrrocrrcccooorcararocrcocaaoccaakorcrcckokkkcokcacrkcckakkkkcaorooaorroccrrakcrcaacaokocaokkaorocorckrkokrrcaaarokaoaaroookorrorkoarorckacoaoakkokracaokaaokarooraraaacokrkkkaakoacookcrroakrkoacockkkkoccooarcaraarckcoaaaocakrororkrkorkckokrarkacokokrroacoccaookccrakkkrkoacarr
// 每一个必须保证顺序（如果顺序不对也是不满足的）
// 这样应该可以通过测试，但是不满足实际情况
// Your runtime beats 22.22 % of javascript submissions
const minNumberOfFrogs = function(croakOfFrogs) {
  // 如果开头不是C，或者长度不是5的倍数，那么肯定不满足
  const len = croakOfFrogs.length;
  if (croakOfFrogs[0] !== 'c' || croakOfFrogs[len - 1] !== 'k') {
    return -1;
  }
  if (len % 5 !== 0) {
    return -1;
  }
  // 如果所有的字母次数不相等，那么也不满足
  const times = len / 5;
  let dict = {};
  for (let i = 0; i < len; i++) {
    const key = croakOfFrogs[i];
    if (dict[key]) {
      dict[key]++;
      // 如果某个字母的数量大于倍数，那么就返回-1
      if (dict[key] > times) {
        return -1;
      }
    } else {
      dict[key] = 1;
    }
  }
  // 不是不必须连续的
  // 遍历：如果消除一个时，判断剩余的最大的次数+1就是需要最少的数量
  // 两次循环不好，可以优化一下
  dict = {};
  // 这里不应该使用dict存储，不能保存顺序，应该使用子字符串
  let max = 1;
  // 辅助函数：判断是否满足条件
  const judge = (obj) => {
    // 是否满足条件？每一个的数量都超过1
    if (obj.c && obj.r && obj.o && obj.a && obj.k) {
      const currentMax = Math.max(obj.c, obj.r, obj.o, obj.a, obj.k);
      max = max > currentMax ? max : currentMax;
      // 满足后每一项减少1
      obj.c -= 1;
      obj.r -= 1;
      obj.o -= 1;
      obj.a -= 1;
      obj.k -= 1;
    }
  };
  for (let i = 0; i < len; i++) {
    const key = croakOfFrogs[i];
    dict[key] ? (dict[key]++) : (dict[key] = 1);
    judge(dict);
  }
  return max;
};
// @lc code=end
