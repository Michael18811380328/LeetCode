// 367-isPerfectSquare.js
import { isPerfectSquare, isPerfectSquare2 } from '../finished3/367-isPerfectSquare';

test('isPerfectSquare', () => {
  expect(isPerfectSquare(1)).toEqual(true);
  expect(isPerfectSquare(16)).toEqual(true);
  expect(isPerfectSquare(215)).toEqual(false);

  expect(isPerfectSquare2(1)).toEqual(true);
  expect(isPerfectSquare2(16)).toEqual(true);
  expect(isPerfectSquare2(5)).toEqual(false);
  expect(isPerfectSquare2(18856753)).toEqual(false);
});
