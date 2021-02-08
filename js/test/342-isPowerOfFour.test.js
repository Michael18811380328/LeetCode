import { isPowerOfFour, isPowerOfFour2 } from '../src/342-isPowerOfFour';

test('342-isPowerOfFour.js', () => {
  expect(isPowerOfFour(4)).toEqual(true);
  expect(isPowerOfFour(0)).toEqual(false);
  expect(isPowerOfFour(256)).toEqual(true);
  expect(isPowerOfFour(16)).toEqual(true);
  expect(isPowerOfFour(32)).toEqual(false);

  expect(isPowerOfFour2(4)).toEqual(true);
  expect(isPowerOfFour2(1)).toEqual(true);
  expect(isPowerOfFour2(0)).toEqual(false);
  expect(isPowerOfFour2(256)).toEqual(true);
  expect(isPowerOfFour2(16)).toEqual(true);
  expect(isPowerOfFour2(32)).toEqual(false);
});
