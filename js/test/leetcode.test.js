import $ from '../finished/leetcode';

// 01-two-sum
test('01-get two items index from an array', () => {
  expect($.twoSum([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect($.twoSum([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
});