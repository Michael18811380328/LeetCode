/**
 * @param {string} num
 * @return {string}
 */
const removeTrailingZeros = function(num) {
  return num.replace(/0+$/, '');
};

export { removeTrailingZeros };
