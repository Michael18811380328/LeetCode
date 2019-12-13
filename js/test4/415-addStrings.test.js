import { addStrings, addStrings2, addStrings3 } from '../finished4/415-addStrings';

test('415-addStrings.js', () => {
  expect(addStrings('0', '0')).toEqual('0');
  expect(addStrings('1', '2')).toEqual('3');
  expect(addStrings('123', '54321')).toEqual('54444');

  expect(addStrings2('0', '0')).toEqual('0');
  expect(addStrings2('1', '2')).toEqual('3');
  expect(addStrings2('123', '54321')).toEqual('54444');
  expect(addStrings2("123456789", "987654321")).toEqual("1111111110");
  expect(addStrings2("123456789", "22123456789234567892345678")).toEqual("22123456789234568015802467");

  expect(addStrings3('0', '0')).toEqual('0');
  expect(addStrings3('1', '2')).toEqual('3');
  expect(addStrings3('123', '54321')).toEqual('54444');
  expect(addStrings3('408', '5')).toEqual('413');
});