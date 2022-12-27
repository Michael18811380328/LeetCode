import { checkXMatrix } from '../src/2319-checkXMatrix';

test('checkXMatrix', () => {
  expect(checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]])).toEqual(true);
  expect(checkXMatrix([[5,7,0],[0,3,1],[0,5,0]])).toEqual(false);
});
