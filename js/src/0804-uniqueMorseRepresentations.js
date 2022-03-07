/**
 * @param {string[]} words
 * @return {number}
 */
// 84 ms, 在所有 JavaScript 提交中击败了86.71%
const uniqueMorseRepresentations = function(words) {
  const standard = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

  const fn = (str) => {
    let tmp = '';
    const len = str.length;
    for (let i = 0; i < len; i++) {
      const index = str.charCodeAt(i) - 97;
      tmp += standard[index];
    }
    // console.log(str, tmp);
    return tmp;
  };

  const dict = {};
  let num = 0;
  for (let i = 0; i < words.length; i++) {
    const item = words[i];
    const key = fn(item);
    if (!dict[key]) {
      dict[key] = true;
      num++;
    }
  }
  // console.log(dict);
  return num;
};
