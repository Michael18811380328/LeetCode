// test-22 generate
import { isValid, generateParenthesis, generateParenthesis2, generateParenthesis3 } from '../src/22-generate-parenthesis';

test('generate Parenthesis', () => {
  const arr = [
    '()()()',
    '(())()',
    '()(())',
    '(()())',
    '((()))',
  ];

  // 这里次序可以不同
  expect(generateParenthesis(3)).toEqual(arr);
  expect(generateParenthesis2(3)).toEqual(arr);
  expect(generateParenthesis3(3)).toEqual(arr);

  // 测试辅助函数
  for (let i = 0; i < arr.length; i++) {
    expect(isValid(arr[i])).toEqual(true);
  }
  expect(isValid('(((())')).toEqual(false);
  expect(isValid('(()))(')).toEqual(false);
});
