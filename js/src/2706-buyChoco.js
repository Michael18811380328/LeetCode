/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
const buyChoco = function(prices, money) {
  prices = prices.sort((a, b) => a > b ? 1 : -1);
  if (prices[0] + prices[1] > money) {
    return money;
  }
  return money - prices[0] - prices[1];
};

export { buyChoco };
