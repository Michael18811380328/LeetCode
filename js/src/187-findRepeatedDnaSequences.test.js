import { findRepeatedDnaSequences } from './187-findRepeatedDnaSequences';

test('187', () => {
  expect(findRepeatedDnaSequences('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
});
