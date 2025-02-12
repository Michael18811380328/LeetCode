import { rotatedDigits } from '../src/0788-rotate-number';

test('788-rotate-number', () => {
  expect(rotatedDigits(10)).toEqual(4);
  expect(rotatedDigits(88)).toEqual(32);
  expect(rotatedDigits(120)).toEqual(49);
  expect(rotatedDigits(1230)).toEqual(417);
  expect(rotatedDigits(9230)).toEqual(2096);
});
