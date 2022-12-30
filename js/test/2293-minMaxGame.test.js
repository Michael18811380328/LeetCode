import { minMaxGame } from '../src/2293-minMaxGame';

test('minMaxGame', () => {
  expect(minMaxGame([1,3,5,2,4,8,2,2])).toEqual(1);
  expect(minMaxGame([3])).toEqual(3);
});
