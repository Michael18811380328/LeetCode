import { longestCommonPrefixPro } from '../finished/14-longestCommonPrefix';

test('14-longestCommonPrefix', () => {
  expect(longestCommonPrefixPro(['flower', 'flow', 'flight'])).toEqual('fl');
  expect(longestCommonPrefixPro(['dog', 'racecar', 'car'])).toEqual('');
});
