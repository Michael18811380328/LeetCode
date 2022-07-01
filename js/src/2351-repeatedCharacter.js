/**
 * @param {string} s
 * @return {character}
 * 2351. 第一个出现两次的字母
 * 难度简单
 */
const repeatedCharacter = function(s) {
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (dict[key]) {
      return key;
    } else {
      dict[key] = true;
    }
  }
};

export { repeatedCharacter };
