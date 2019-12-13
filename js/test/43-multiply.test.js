import { multiply, multiply2 } from '../finished/43-multiply';

test('43-multiply.js', () => {
  expect(multiply('0', '0')).toEqual('0');
  expect(multiply('123', '456')).toEqual("56088");
  expect(multiply("123456789", "987654321")).toEqual("121932631112635269");

  expect(multiply2('123', '2')).toEqual("246");
  expect(multiply2('123', '456')).toEqual("56088");
  expect(multiply2("123456789", "987654321")).toEqual("121932631112635269");
});
