import Obj from '../improve/improve.js';

// test-22
test('2 plus 2 equal 4', () => {
  const arr = [
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
];
  expect(Obj.generateParenthesis(3)).toEqual(arr);
});