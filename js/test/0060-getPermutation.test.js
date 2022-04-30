import { getPermutation } from '../src/0060-getPermutation';

test('getPermutation', () => {
  expect(getPermutation(3, 3)).toEqual('213');
  expect(getPermutation(4, 9)).toEqual('2314');
});
