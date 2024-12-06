import { groupAnagrams } from '../src/0049-groupAnagrams';

describe('groupAnagrams', () => {
  it('groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) should return [["eat","tea","ate"],["tan","nat"],["bat"]]', () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]]);
  });
});
