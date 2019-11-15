import { maxProfit } from '../finished/121-stock-maxProfit-1';

test('121-max-profit', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  expect(maxProfit([7, 6, 4, 3, 1, 9, 0, 9, 8, 8, 1])).toEqual(9);
});
