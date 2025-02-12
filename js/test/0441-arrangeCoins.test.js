import { arrangeCoins } from '../src/0441-arrangeCoins';

test('441', () => {
  expect(arrangeCoins(1)).toEqual(1);
  expect(arrangeCoins(5)).toEqual(2);
  expect(arrangeCoins(8)).toEqual(3);
});
