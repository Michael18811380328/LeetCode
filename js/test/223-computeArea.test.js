import { computeArea } from '../src/223-computeArea';

test('224-calculate.js', () => {
  expect(computeArea(-3, 0, 3, 4, 0, -1, 9, 2)).toEqual(45);
  expect(computeArea(-2, -2, 2, 2, -2, -2, 2, 2)).toEqual(16);
  expect(computeArea(-2, -2, 2, 2, -1, -1, 1, 1)).toEqual(16);
  expect(computeArea(-2, -2, 2, 2, -1, -1, 3, 3)).toEqual(23);
  expect(computeArea(-2, -2, 2, 2, -4, 3, -3, 4)).toEqual(17);
});
