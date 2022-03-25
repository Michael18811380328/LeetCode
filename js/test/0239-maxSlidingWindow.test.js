import { maxSlidingWindow, maxSlidingWindow2 } from '../src/0239-maxSlidingWindow';

test('0239-maxSlidingWindow', () => {
  expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3,3,5,5,6,7]);
  expect(maxSlidingWindow([9, 11, 1, 3, -1, -3, 5, 3, 6, 7, 1, 3, -1, -3, 5, 3, 6, 7, 1, 3, -1, -3, 5, 3, 6, 7], 4)).toEqual([11,11,3,5,5,6,7,7,7,7,3,5,5,6,7,7,7,7,3,5,5,6,7]);
  expect(maxSlidingWindow([9, 11, 1, 3, -1, -3, 5], 4)).toEqual([11,11,3,5]);
  expect(maxSlidingWindow([1, -1, 1, 3, -1, -3, 5, 3, 6, 7, 1, 3, -1, -3, 5, 3, 6, 7, 1], 3)).toEqual([1, 3, 3, 3, 5, 5, 6,7, 7, 7, 3, 3, 5, 5, 6, 7, 7 ]);
  expect(maxSlidingWindow([9, 10, 9, -7, -4, -8, 2, -6], 5)).toEqual([10,10,9,2]);

  expect(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3,3,5,5,6,7]);
  expect(maxSlidingWindow2([9, 11, 1, 3, -1, -3, 5, 3, 6, 7, 1, 3, -1, -3, 5, 3, 6, 7, 1, 3, -1, -3, 5, 3, 6, 7], 4)).toEqual([11,11,3,5,5,6,7,7,7,7,3,5,5,6,7,7,7,7,3,5,5,6,7]);
  expect(maxSlidingWindow2([9, 11, 1, 3, -1, -3, 5], 4)).toEqual([11,11,3,5]);
  expect(maxSlidingWindow2([1, -1, 1, 3, -1, -3, 5, 3, 6, 7, 1, 3, -1, -3, 5, 3, 6, 7, 1], 3)).toEqual([1, 3, 3, 3, 5, 5, 6,7, 7, 7, 3, 3, 5, 5, 6, 7, 7 ]);
  expect(maxSlidingWindow2([9, 10, 9, -7, -4, -8, 2, -6], 5)).toEqual([10,10,9,2]);
});
