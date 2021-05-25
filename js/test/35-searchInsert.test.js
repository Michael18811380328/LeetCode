import { searchInsert } from '../src/35-searchInsert';

test('35-searchInsert', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
  expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
  expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
  expect(searchInsert([1, 3, 5, 6, 7, 8, 10, 12, 15, 17, 28, 34, 100], 20)).toEqual(10);
});
