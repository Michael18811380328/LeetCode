import { nextPermutation } from '../src/31-nextPermutation';

test('31-nextPermutation.test.js', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 3, 2];
  const arr3 = [3, 2, 1];
  nextPermutation(arr1);
  nextPermutation(arr2);
  nextPermutation(arr3);
  expect(arr1).toEqual([1, 3, 2]);
  expect(arr2).toEqual([2, 1, 3]);
  expect(arr3).toEqual([1, 2, 3]);
});
