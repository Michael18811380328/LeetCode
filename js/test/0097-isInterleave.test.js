import { isInterleave, isInterleave2, isInterleave3 } from '../src/0097-isInterleave';

test('97', () => {
  expect(isInterleave('abc', 'abc', 'aabbcc')).toEqual(true);
  expect(isInterleave('trans', 'abc', 'abctrans')).toEqual(true);
  expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true);
  expect(isInterleave(
    'abababababababababababababababababababababababababababababababababababababababababababababababababbb',
    'babababababababababababababababababababababababababababababababababababababababababababababababaaaba',
    'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb'
  )).toEqual(false);

  expect(isInterleave2('abc', 'abc', 'aabbcc')).toEqual(true);
  expect(isInterleave2('trans', 'abc', 'abctrans')).toEqual(true);
  expect(isInterleave2('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true);
  expect(isInterleave2(
    'abababababababababababababababababababababababababababababababababababababababababababababababababbb',
    'babababababababababababababababababababababababababababababababababababababababababababababababaaaba',
    'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb'
  )).toEqual(false);

  expect(isInterleave3('abc', 'abc', 'aabbcc')).toEqual(true);
  expect(isInterleave3('trans', 'abc', 'abctrans')).toEqual(true);
  expect(isInterleave3('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true);
  expect(isInterleave3(
    'abababababababababababababababababababababababababababababababababababababababababababababababababbb',
    'babababababababababababababababababababababababababababababababababababababababababababababababaaaba',
    'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb'
  )).toEqual(false);
});
