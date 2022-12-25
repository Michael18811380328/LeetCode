import { monotoneIncreasingDigits } from '../src/0738-monotoneIncreasingDigits.js';

test('788-rotate-number', () => {
  expect(monotoneIncreasingDigits(6)).toEqual(6);
  expect(monotoneIncreasingDigits(10)).toEqual(9);
  expect(monotoneIncreasingDigits(1234)).toEqual(1234);
  expect(monotoneIncreasingDigits(332)).toEqual(299);
  expect(monotoneIncreasingDigits(963153657)).toEqual(899999999);
});
