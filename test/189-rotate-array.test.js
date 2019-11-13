import { rotate, rotate1, rotate2 } from '../finished/189-rotate-array';

test('189-rotate-array-sequence', () => {
  const array = [-1, -100, 3, 99];
  rotate(array, 2);
  expect(array).toEqual([3, 99, -1, -100]);

  const array1 = [-1, -100, 3, 99];
  rotate1(array1, 2);
  expect(array1).toEqual([3, 99, -1, -100]);

  const array2 = [-1, -100, 3, 99];
  rotate2(array2, 2);
  expect(array2).toEqual([3, 99, -1, -100]);
});
