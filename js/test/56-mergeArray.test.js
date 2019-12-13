import { merge } from '../finished/56-mergeArray';

test('56-mergeArray', () => {
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
  expect(merge([[1, 4], [4, 5]])).toEqual([[1, 5]]);
  expect(merge([[1, 3], [2, 6], [8, 10], [15, 18], [16, 20], [20, 22], [24, 30]])).toEqual([[1, 6], [8, 10], [15, 22], [24, 30]]);
  // 测试未排序数组
  expect(merge([[1, 4], [0, 4]])).toEqual([[0, 4]]);
  expect(merge([[0, 4], [1, 4]])).toEqual([[0, 4]]);
  expect(merge([[1, 2], [0, 4]])).toEqual([[0, 4]]);
  // 测试单一区间数组
  expect(merge([[2, 3], [2, 2], [3, 3], [1, 3], [5, 7], [2, 2], [4, 6]])).toEqual([[1, 3], [4, 7]]);
  // 测试多区间重复
  expect(merge([[2, 3], [0, 1], [1, 2], [3, 4], [4, 5], [1, 1], [0, 1], [4, 6], [5, 7], [1, 1], [3, 5]])).toEqual([[0, 7]]);
});