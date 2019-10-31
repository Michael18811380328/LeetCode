import $ from '../finished/leetcode.js';

// 01-two-sum
test('2 plus 2 equal 4', () => {
  expect($.twoSum([2, 11, 7, 15], 9)).toEqual([0, 2]);
  expect($.twoSum([1, 3, 4, 0, 2], 6)).toEqual([2, 4]);
});