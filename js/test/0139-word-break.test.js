import { wordBreak, wordBreak1 } from '../src/0139-word-break';

test('139-word-break', () => {
  expect(wordBreak("l", [])).toEqual(false);
  expect(wordBreak("leetcode", ["leet", "code"])).toEqual(true);
  expect(wordBreak("applepenapple", ["apple", "pen"])).toEqual(true);
  expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat", "a", "bilibili"])).toEqual(false);
  expect(wordBreak("abcd", ["a","abc","b","cd"])).toEqual(true);
});

test('139-word-break1', () => {
  expect(wordBreak1("l", [])).toEqual(false);
  expect(wordBreak1("leetcode", ["leet", "code"])).toEqual(true);
  expect(wordBreak1("applepenapple", ["apple", "pen"])).toEqual(true);
  expect(wordBreak1("catsandog", ["cats", "dog", "sand", "and", "cat", "a", "bilibili"])).toEqual(false);
  expect(wordBreak1("abcd", ["a","abc","b","cd"])).toEqual(true);
});
