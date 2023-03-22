/**
 * @param {string} sentence
 * @return {boolean}
 * easy 判断回环句
 */
const isCircularSentence = function(sentence) {
  if (!sentence.includes(' ')) {
    return sentence[0] === sentence[sentence.length - 1];
  }
  const arr = sentence.split(' ');
  // check first and last word
  if (arr[0][0] !== arr[arr.length - 1][arr[arr.length - 1].length - 1]) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][arr[i].length - 1] !== arr[i + 1][0]) {
      return false;
    }
  }
  return true;
};

// console.log(isCircularSentence("leetcode exercises sound delightful"))
// console.log(isCircularSentence("Leetcode is cool"))

export { isCircularSentence };
