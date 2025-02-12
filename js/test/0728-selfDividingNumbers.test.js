import { selfDividingNumbers } from '../src/0728-selfDividingNumbers';

test('551-checkRecord', () => {
  expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
});
