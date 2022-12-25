import { checkDistances } from '../src/2399-checkDistances.js';

test('checkDistances', () => {
  expect(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toEqual(true);
  expect(checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])).toEqual(false);
});
