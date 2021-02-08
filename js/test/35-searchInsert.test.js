import { searchInsert } from '../src/35-searchInsert';

test('35-searchInsert', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
  expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
});
