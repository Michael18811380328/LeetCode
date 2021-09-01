import { findRepeatedDnaSequences, findRepeatedDnaSequences1 } from '../src/0187-findRepeatedDnaSequences';

test('187', () => {
  expect(findRepeatedDnaSequences('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  expect(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
  expect(findRepeatedDnaSequences1('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  expect(findRepeatedDnaSequences1('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
});
