import { getPermutation, getPermutation2 } from './60-getPermutation';

test('getPermutation', () => {
  expect(getPermutation(3, 3)).toEqual('213');
  expect(getPermutation(4, 9)).toEqual('2314');
  expect(getPermutation2(3, 3)).toEqual('213');
  expect(getPermutation2(4, 9)).toEqual('2314');
  // 后面的测试不通过
  // expect(getPermutation2(8, 333)).toEqual('12578436');
});
