import { reverseString } from '../src/344-reverseString';

test('reverseString', () => {
  const arr = ['h', 'e', 'l', 'l', 'o'];
  reverseString(arr);
  expect(arr).toEqual(['o', 'l', 'l', 'e', 'h']);
});
