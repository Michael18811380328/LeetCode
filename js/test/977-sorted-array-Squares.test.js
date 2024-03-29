import { sortedSquares, sortedSquares2, sortedSquares3 } from '../src/0977-sorted-array-Squares';

test('977-sorted-array-Squares', () => {
  expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  expect(sortedSquares([2, 2])).toEqual([4, 4]);

  expect(sortedSquares2([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  expect(sortedSquares2([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  expect(sortedSquares2([2, 2])).toEqual([4, 4]);

  expect(sortedSquares3([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  expect(sortedSquares3([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
  expect(sortedSquares3([2, 2])).toEqual([4, 4]);
});
