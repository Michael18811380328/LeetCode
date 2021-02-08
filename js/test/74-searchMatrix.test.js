import { searchMatrix, searchMatrix2, searchArray } from '../src/74-searchMatrix';

test('74-search-array', () => {
  expect(searchArray([1, 2, 3, 4, 5], 2)).toEqual(true);
  expect(searchArray([1, 2, 3, 4, 5, 7, 11, 12, 15, 28], 16)).toEqual(false);
  expect(searchArray([1, 2, 3, 4, 5, 6], 2)).toEqual(true);
});

test('74-search-matrix', () => {
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)).toEqual(true);
  expect(searchMatrix([], 0)).toEqual(false);
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13)).toEqual(false);
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50], [63, 64, 66, 70], [73, 78, 84, 90]], 63)).toEqual(true);
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50], [63, 64, 66, 70], [73, 78, 84, 90]], 65)).toEqual(false);
  expect(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50], [63, 64, 66, 70], [73, 78, 84, 90]], 62)).toEqual(false);
  // method2
  expect(searchMatrix2([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)).toEqual(true);
  expect(searchMatrix2([], 0)).toEqual(false);
  expect(searchMatrix2([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 13)).toEqual(false);
  expect(searchMatrix2([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50], [63, 64, 66, 70], [73, 78, 84, 90]], 63)).toEqual(true);
  expect(searchMatrix2([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50], [63, 64, 66, 70], [73, 78, 84, 90]], 65)).toEqual(false);
  expect(searchMatrix2([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50], [63, 64, 66, 70], [73, 78, 84, 90]], 62)).toEqual(false);
});
