import { rearrangeCharacters } from '../src/2287-rearrangeCharacters';

test('rearrangeCharacters', () => {
  expect(rearrangeCharacters("ilovecodingonleetcode", "code")).toEqual(2);
  expect(rearrangeCharacters("abcba", "abc")).toEqual(1);
  expect(rearrangeCharacters("abbaccaddaeea", "aaaaa")).toEqual(1);
  expect(rearrangeCharacters("lrnvlcqukanpdnluowenfxquitzryponxsikhciohyostvmkapkfpglzikitwiraqgchxnpryhwpuwpozacjhmwhjvslprqlnxrk", "woijih")).toEqual(2);
  expect(rearrangeCharacters("abc", "abcd")).toEqual(0);
  expect(rearrangeCharacters("aaaaaaaaaaaaaaaaaaaaaaaaaa", "aaaaaaaaa")).toEqual(2);
});
