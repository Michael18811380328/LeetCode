import { longestCommonPrefixPro, findLongestCommonPrefix, longestCommonPrefix } from '../finished/14-longestCommonPrefix';

test('14-longestCommonPrefix', () => {
  // method1
  expect(longestCommonPrefixPro(['flower', 'flow', 'flight'])).toEqual('fl');
  expect(longestCommonPrefixPro(['dog', 'racecar', 'car'])).toEqual('');
  expect(longestCommonPrefixPro([])).toEqual('');
  expect(longestCommonPrefixPro(['a', 'b'])).toEqual('');
  expect(longestCommonPrefixPro(['ab', 'abc'])).toEqual('ab');
  // method2
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  expect(longestCommonPrefix([])).toEqual('');
  expect(longestCommonPrefix(['a', 'b'])).toEqual('');
  expect(longestCommonPrefix(['ab', 'abc'])).toEqual('ab');
  // method3
  expect(findLongestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  expect(findLongestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  expect(findLongestCommonPrefix([])).toEqual('');
  expect(findLongestCommonPrefix(['a', 'b'])).toEqual('');
  expect(findLongestCommonPrefix(['ab', 'abc'])).toEqual('ab');
});
