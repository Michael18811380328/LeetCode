import { compressString } from '../src/0443-compress-string';

test('443-compress-string', () => {
  const arr = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
  const len = compressString(arr);
  expect(len).toEqual(6);
  expect(arr).toEqual(['a', '2', 'b', '2', 'c', '3']);
});

test('443-compress-string', () => {
  const arr = ['a'];
  const len = compressString(arr);
  expect(len).toEqual(1);
  expect(arr).toEqual(['a']);
});

test('443-compress-string', () => {
  const arr = ['E', 'u', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', '9', '9', '9', '9', 'R'];
  const len = compressString(arr);
  expect(len).toEqual(7);
  expect(arr).toEqual(['E', 'u', 'e', '9', '9', '4', 'R']);
});

test('443-compress-string', () => {
  const arr = ['E', 'u', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', '9', '9', '9', '9', 'R'];
  const len = compressString(arr);
  expect(len).toEqual(8);
  expect(arr).toEqual(['E', 'u', 'e', '1', '1', '9', '4', 'R']);
});
