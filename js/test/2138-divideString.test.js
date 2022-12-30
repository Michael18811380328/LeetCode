import divideString from '../src/2138-divideString';

test('divideString', () => {
  expect(divideString("abcdefghi", 3, 'x')).toEqual(['abc', 'def', 'ghi']);
  expect(divideString("abcdefghij", 3, 'x')).toEqual(['abc', 'def', 'ghi', 'jxx']);
});
