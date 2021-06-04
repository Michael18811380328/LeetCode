import { moveZeroes, moveZeroes2 } from '../src/283-moveZeroes';

test('283-moveZeroes.js', () => {
  const arr1 = [0, 1, 2, 3];
  moveZeroes(arr1);
  expect(arr1).toEqual([1, 2, 3, 0]);
  const arr2 = [1, 2, 3, 0, 0, 2, 3];
  moveZeroes(arr2);
  expect(arr2).toEqual([1, 2, 3, 2, 3, 0, 0]);
});

test('283-moveZeroes.js method2', () => {
  const arr1 = [0, 1, 2, 3];
  moveZeroes2(arr1);
  expect(arr1).toEqual([1, 2, 3, 0]);
  const arr2 = [1, 2, 3, 0, 0, 2, 3];
  moveZeroes2(arr2);
  expect(arr2).toEqual([1, 2, 3, 2, 3, 0, 0]);
});
