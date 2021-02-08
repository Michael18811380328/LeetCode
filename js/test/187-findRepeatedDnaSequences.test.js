import { findRepeatedDnaSequences } from '../src/187-findRepeatedDnaSequences';

test('187', () => {
  expect(findRepeatedDnaSequences('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
});
