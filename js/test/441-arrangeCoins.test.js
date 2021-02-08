import { arrangeCoins } from '../src/441-arrangeCoins';

test('441', () => {
  expect(arrangeCoins(5)).toEqual(2);
  expect(arrangeCoins(8)).toEqual(3);
});
