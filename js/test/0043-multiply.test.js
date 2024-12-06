import { multiply2 } from '../src/0043-multiply';

test('43-multiply.js', () => {
  expect(multiply2('123', '2')).toEqual('246');
  expect(multiply2('123', '456')).toEqual('56088');
  expect(multiply2('123456789', '987654321')).toEqual('121932631112635269');
});
