import { removeDuplicates } from '../src/80-remove-duplicates';

test('80', () => {
  const arr1 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
  expect(removeDuplicates(arr1)).toEqual(7);
  expect(arr1).toEqual([0, 0, 1, 1, 2, 3, 3]);
});
