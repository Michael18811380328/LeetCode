import { removeAnagrams } from '../src/2273-removeAnagrams';

test('removeAnagrams', () => {
  expect(removeAnagrams(["abba","baba","bbaa","cd","cd"])).toEqual(["abba","cd"]);
});
