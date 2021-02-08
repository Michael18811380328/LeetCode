import { twoSum, twoSum1, twoSum2, twoSum3 } from '../src/01-two-sum';

test('01-get two items index from an array', () => {
  expect(twoSum([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect(twoSum([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
  expect(twoSum1([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect(twoSum1([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
  expect(twoSum1([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum2([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect(twoSum2([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
  expect(twoSum2([3, 3], 6)).toEqual([0, 1]);
  expect(twoSum3([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect(twoSum3([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
  expect(twoSum3([3, 3], 6)).toEqual([0, 1]);
});
