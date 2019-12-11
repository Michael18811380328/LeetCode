import { numIslands } from '../finished2/200-numIslands';

test('200-numIslands.js', () => {
  expect(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])).toEqual(1);
  expect(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","0","1"]])).toEqual(3);
});