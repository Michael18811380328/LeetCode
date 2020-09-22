import { findRepeatedDnaSequences1 } from './187-findRepeatedDnaSequences';

test('187', () => {
  expect(findRepeatedDnaSequences1('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  expect(findRepeatedDnaSequences1('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
  // expect(findRepeatedDnaSequences2('AAAAAAAAAAA')).toEqual(['AAAAAAAAAA']);
  // expect(findRepeatedDnaSequences2('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')).toEqual(['AAAAACCCCC', 'CCCCCAAAAA']);
});
