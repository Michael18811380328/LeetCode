import { countVowelSubstrings } from '../src/2062-countVowelSubstrings';

test('1752-countVowelSubstrings', () => {
  expect(countVowelSubstrings('cuaieuouac')).toEqual(7);
  expect(countVowelSubstrings('cuaieuouaaieuouaieuouaieuouc')).toEqual(234);
});
