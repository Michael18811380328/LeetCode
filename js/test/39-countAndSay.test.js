import { countAndSay, countAndSay2 } from '../finished/39-countAndSay.js';

test('39-countAndSay.test.js', () => {
  expect(countAndSay(1)).toEqual('1');
  expect(countAndSay(2)).toEqual('11');
  expect(countAndSay(3)).toEqual('21');
  expect(countAndSay(4)).toEqual('1211');
  expect(countAndSay(15)).toEqual('311311222113111231131112132112311321322112111312211312111322212311322113212221');

  expect(countAndSay2(1)).toEqual('1');
  expect(countAndSay2(2)).toEqual('11');
  expect(countAndSay2(3)).toEqual('21');
  expect(countAndSay2(4)).toEqual('1211');
  expect(countAndSay2(15)).toEqual('311311222113111231131112132112311321322112111312211312111322212311322113212221');
});
