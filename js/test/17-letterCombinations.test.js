import { letterCombinations } from '../src/17-letterCombinations';

test('17-letterCombinations', () => {
  const result = ['adw', 'adx', 'ady', 'adz', 'aew', 'aex', 'aey', 'aez', 'afw', 'afx', 'afy', 'afz', 'bdw', 'bdx', 'bdy', 'bdz', 'bew', 'bex', 'bey', 'bez', 'bfw', 'bfx', 'bfy', 'bfz', 'cdw', 'cdx', 'cdy', 'cdz', 'cew', 'cex', 'cey', 'cez', 'cfw', 'cfx', 'cfy', 'cfz'];
  expect(letterCombinations('239')).toEqual(result);
  expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
});
