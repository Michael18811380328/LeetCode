import { wordPattern } from '../src/0290-wordPattern';

test('wordPattern', () => {
  expect(wordPattern('abba', 'dog cat cat dog')).toEqual(true);
  expect(wordPattern('abba', 'dog cat cat fish')).toEqual(false);
  expect(wordPattern('aaaa', 'dog cat cat fish')).toEqual(false);
  expect(wordPattern('abba', 'dog dog dog dog')).toEqual(false);
});
