import { countValidWords } from '../src/2047-countValidWords';

test('2047-countValidWords', () => {
  expect(countValidWords('-')).toEqual(0);
  expect(countValidWords('pencil-sharpener.')).toEqual(1);
  expect(countValidWords('cat and  dog')).toEqual(3);
  expect(countValidWords('!this  1-s b8d!')).toEqual(0);
  expect(countValidWords('alice and  bob are playing stone-game10')).toEqual(5);
});
