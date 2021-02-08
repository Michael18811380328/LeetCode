import { mergeTwoArray } from '../src/88-mergeTwoArray';

test('88-mergeTwoArray', () => {
  expect(mergeTwoArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
  expect(mergeTwoArray([1, 0], 1, [2], 1)).toEqual([1, 2]);
  expect(mergeTwoArray([0], 0, [1], 1)).toEqual([1]);
  expect(mergeTwoArray([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  expect(mergeTwoArray([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5)).toEqual([1, 2, 3, 4, 5, 6]);
});
