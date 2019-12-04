import { findMedianSortedArrays, findMedianSortedArrays2 } from '../finished/04-findMedianSortedArrays.js';

test('04-findMedianSortedArrays.js', () => {
  // expect(findMedianSortedArrays([1, 2, 3], [])).toEqual(2);
  // expect(findMedianSortedArrays([], [1,2])).toEqual(1.5);
  // expect(findMedianSortedArrays([1, 2], [2])).toEqual(2);
  // expect(findMedianSortedArrays([1, 2, 5], [3, 4])).toEqual(3);
  // expect(findMedianSortedArrays([1,2], [3,4])).toEqual(2.5);
  // expect(findMedianSortedArrays([1,2,3,4,5,6,7,8,9], [10])).toEqual(5.5);
  // expect(findMedianSortedArrays([1,2], [3,4,5,6,7,8,9,10])).toEqual(5.5);
  // expect(findMedianSortedArrays([1,2,3,4,5,6,7,8], [9])).toEqual(5);
  // expect(findMedianSortedArrays([1], [2,3,4,5,6,7,8,9])).toEqual(5);
  // expect(findMedianSortedArrays([1,2,3,6,8,9,13,24,29,30], [4,5,10,11,12,14])).toEqual(9.5);
  // expect(findMedianSortedArrays([0,0], [0,0])).toEqual(0);
  // expect(findMedianSortedArrays([1],[2])).toEqual(1.5);
  // expect(findMedianSortedArrays([100001],[100000])).toEqual(100000.5);
  // expect(findMedianSortedArrays([2,2,2,2],[2,2,2])).toEqual(2);
  // expect(findMedianSortedArrays([2,2,2],[2,2,2])).toEqual(2);
  // expect(findMedianSortedArrays([2,3,4], [1])).toEqual(2.5);
  // expect(findMedianSortedArrays([2,3,4,5], [1])).toEqual(3);

  // [1,3,4],[2] 2.5
  // 这是算法的问题，不是情况不够多
  // 分情况很多，就容易重复或者漏选；
  // 首先使用最基础的方法完成这道题
  
  expect(findMedianSortedArrays2([1, 2, 3], [])).toEqual(2);
  expect(findMedianSortedArrays2([], [1,2])).toEqual(1.5);
  expect(findMedianSortedArrays2([1, 2], [2])).toEqual(2);
  expect(findMedianSortedArrays2([1, 2, 5], [3, 4])).toEqual(3);
  expect(findMedianSortedArrays2([1,2], [3,4])).toEqual(2.5);
  expect(findMedianSortedArrays2([1,2,3,4,5,6,7,8,9], [10])).toEqual(5.5);
  expect(findMedianSortedArrays2([1,2], [3,4,5,6,7,8,9,10])).toEqual(5.5);
  expect(findMedianSortedArrays2([1,2,3,4,5,6,7,8], [9])).toEqual(5);
  expect(findMedianSortedArrays2([1], [2,3,4,5,6,7,8,9])).toEqual(5);
  expect(findMedianSortedArrays2([1,2,3,6,8,9,13,24,29,30], [4,5,10,11,12,14])).toEqual(9.5);
  expect(findMedianSortedArrays2([0,0], [0,0])).toEqual(0);
  expect(findMedianSortedArrays2([1],[2])).toEqual(1.5);
  expect(findMedianSortedArrays2([100001],[100000])).toEqual(100000.5);
  expect(findMedianSortedArrays2([2,2,2,2],[2,2,2])).toEqual(2);
  expect(findMedianSortedArrays2([2,2,2],[2,2,2])).toEqual(2);
  expect(findMedianSortedArrays2([2,3,4], [1])).toEqual(2.5);
  expect(findMedianSortedArrays2([2,3,4,5], [1])).toEqual(3);
});