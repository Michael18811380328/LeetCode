/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
const bestHand = function(ranks, suits) {
  const a = suits[0];
  if (suits[1] === a && suits[2] === a && suits[3] === a && suits[4] === a) {
    return 'Flush';
  }
  const good_ranks = [...new Set(ranks)];
  if (good_ranks.length === 5) {
    return 'High Card';
  }
  const dict = {};
  for (let i = 0; i < ranks.length; i++) {
    const key = ranks[i];
    if (!dict[key]) {
      dict[key] = 0;
    }
    dict[key] += 1;
    if (dict[key] === 3) {
      return 'Three of a Kind';
    }
  }
  return 'Pair';
};

export { bestHand };
