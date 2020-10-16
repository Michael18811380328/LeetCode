import { removeDuplicates1, removeDuplicates2 } from '../finished/26-removeDuplicates';

test('26-removeDuplicates-sequence-array', () => {
  expect(removeDuplicates1([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
  expect(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});
