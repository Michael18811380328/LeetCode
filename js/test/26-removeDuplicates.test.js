import { removeDuplicates } from '../finished/26-removeDuplicates';

test('26-removeDuplicates-sequence-array', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});
