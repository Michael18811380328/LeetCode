import { isPowerOfTwo } from '../finished/231-isPowerOfTwo';

test('231-isPowerOfTwo', () => {
  expect(isPowerOfTwo(0)).toEqual(false);
  expect(isPowerOfTwo(1)).toEqual(true);
  expect(isPowerOfTwo(-16)).toEqual(false);
  expect(isPowerOfTwo(218)).toEqual(false);
  expect(isPowerOfTwo(16)).toEqual(true);
});
