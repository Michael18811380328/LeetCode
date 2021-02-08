import { spiralOrder } from '../src/54-spiralOrder';

test('', () => {
  const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const arr2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [9, 10, 11, 12],
  ];
  const arr3 = [[1, 2, 3, 4, 5]];
  const arr4 = [];
  const arr5 = [[7], [9], [6]];
  expect(spiralOrder(arr1)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  expect(spiralOrder(arr2)).toEqual([1, 2, 3, 4, 8, 12, 12, 11, 10, 9, 9, 5, 6, 7, 11, 10]);
  expect(spiralOrder(arr3)).toEqual([1, 2, 3, 4, 5]);
  expect(spiralOrder(arr4)).toEqual([]);
  expect(spiralOrder(arr5)).toEqual([7, 9, 6]);
});
