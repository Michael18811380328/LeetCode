/**
 * @param {string} s
 * @return {number}
 */
const minLength = function(s) {
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replaceAll('AB', '').replaceAll('CD', '');
  }
  return s.length;
};

export { minLength };
