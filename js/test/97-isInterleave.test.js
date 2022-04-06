import { isInterleave, isInterleave2, isInterleave3 } from '../src/97-isInterleave';

test('97', () => {
  expect(isInterleave('abc', 'abc', 'aabbcc')).toEqual(true);
  expect(isInterleave('trans', 'abc', 'abctrans')).toEqual(true);
  expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toEqual(true);
  expect(isInterleave(
    'abababababababababababababababababababababababababababababababababababababababababababababababababbb',
    'babababababababababababababababababababababababababababababababababababababababababababababababaaaba',
    'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb'
  )).toEqual(false);
});
