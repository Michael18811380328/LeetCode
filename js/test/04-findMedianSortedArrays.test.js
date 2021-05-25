import { findMedianSortedArrays, findMedianSortedArrays2 } from '../src/04-findMedianSortedArrays';

test('04-findMedianSortedArrays', () => {
  const testList = [
    [[1, 2, 3], [], 2],
    [[], [1, 2], 1.5],
    [[1, 2], [2], 2],
    [[1, 2, 5], [3, 4], 3],
    [[1, 2], [3, 4], 2.5],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9], [10], 5.5],
    [[1, 2], [3, 4, 5, 6, 7, 8, 9, 10], 5.5],
    [[1, 2, 3, 4, 5, 6, 7, 8], [9], 5],
    [[1], [2, 3, 4, 5, 6, 7, 8, 9], 5],
    [[1, 2, 3, 6, 8, 9, 13, 24, 29, 30], [4, 5, 10, 11, 12, 14], 9.5],
    [[0, 0], [0, 0], 0],
    [[1], [2], 1.5],
    [[100001], [100000], 100000.5],
    [[2, 2, 2, 2], [2, 2, 2], 2],
    [[2, 2, 2], [2, 2, 2], 2],
    [[2, 3, 4], [1], 2.5],
    [[2, 3, 4, 5], [1], 3],
  ];
  testList.forEach(testItem => {
    if (testItem.length === 3) {
      expect(findMedianSortedArrays(testItem[0], testItem[1])).toEqual(testItem[2]);
      expect(findMedianSortedArrays2(testItem[0], testItem[1])).toEqual(testItem[2]);
    }
  });
});
