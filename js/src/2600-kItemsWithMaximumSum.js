/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
const kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
  if (k <= numOnes) {
    return k;
  }
  if (k <= numOnes + numZeros) {
    return numOnes;
  }
  return numOnes - (k - numOnes - numZeros);
};

export { kItemsWithMaximumSum };
