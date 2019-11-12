import { twoSum, twoSum1 } from '../finished/01-two-sum';

test('01-get two items index from an array', () => {
  expect(twoSum([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect(twoSum([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
});

test('01-get two items index from an array', () => {
  expect(twoSum1([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect(twoSum1([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
  expect(twoSum1([3, 3], 6)).toEqual([0, 1]);
});
