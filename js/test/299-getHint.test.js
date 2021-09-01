import { getHint } from '../src/0299-getHint';

test('02-addTwoNumbers.js', () => {
  expect(getHint('1807', '7810')).toEqual('1A3B');
  expect(getHint('1123', '0111')).toEqual('1A1B');
  expect(getHint('123467823305', '423567809080')).toEqual('5A3B');
});
