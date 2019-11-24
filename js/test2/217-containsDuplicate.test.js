import { containsDuplicate, containsDuplicate2 } from '../finished2/217-containsDuplicate';

test('217-containsDuplicate', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});

test('217-containsDuplicate', () => {
  expect(containsDuplicate2([1, 2, 3, 1])).toEqual(true);
  expect(containsDuplicate2([1, 2, 3, 4])).toEqual(false);
  expect(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
});
