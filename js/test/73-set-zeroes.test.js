import { setZeroes } from '../finished/73-set-zeroes';

test('73-setZeroes', () => {
  const arr1 = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5], [1, 2, 3, 4], [9, 8, 8, 111]];
  setZeroes(arr1);
  expect(arr1).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0], [0, 2, 3, 0], [0, 8, 8, 0]]);
  const arr2 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
  setZeroes(arr2);
  expect(arr2).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
});
