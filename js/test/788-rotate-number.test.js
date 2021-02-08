import { rotatedDigits } from '../src/788-rotate-number';

test('788-rotate-number', () => {
  expect(rotatedDigits(10)).toEqual(4);
  expect(rotatedDigits(120)).toEqual(49);
});
