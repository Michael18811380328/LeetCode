import { sortColors } from '../src/0075-sortColors';

test('75-sortColors', () => {
  expect(sortColors([2, 2, 2])).toEqual([2, 2, 2]);
  expect(sortColors([0, 0, 1])).toEqual([0, 0, 1]);
});
