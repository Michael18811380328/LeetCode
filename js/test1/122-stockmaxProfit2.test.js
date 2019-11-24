import { maxProfit } from '../finished1/122-stock-maxProfit-2';

test('122-stockmaxProfit2', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7);
  expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4);
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
});
