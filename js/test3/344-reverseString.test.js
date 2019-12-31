import { reverseString } from '../finished3/344-reverseString';

test('reverseString', () => {
  const arr = ['h', 'e', 'l', 'l', 'o'];
  reverseString(arr);
  expect(arr).toEqual(['o', 'l', 'l', 'e', 'h']);
});
