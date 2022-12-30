import { digitCount } from '../src/2283-digitCount';

test('digitCount', () => {
  expect(digitCount("1210")).toEqual(true);
  expect(digitCount("030")).toEqual(false);
});
