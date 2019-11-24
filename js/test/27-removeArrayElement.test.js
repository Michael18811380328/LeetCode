import { removeElement } from '../finished/27-removeArrayElement';

test('27-removeArrayElement', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  expect(removeElement([0, 1, 3, 0, 4, 4], 2)).toEqual(6);
});
