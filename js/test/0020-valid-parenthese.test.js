import { isValid } from '../src/0020-valid-parenthese';

test('20-valid-parentheses', () => {
  expect(isValid('{}(){}[]')).toEqual(true);
  expect(isValid('{[]}')).toEqual(true);
  expect(isValid('([)]')).toEqual(false);
  expect(isValid('')).toEqual(true);
});
