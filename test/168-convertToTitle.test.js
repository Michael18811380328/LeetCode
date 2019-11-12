import { convertToTitle } from '../finished/168-convertToTitle';

test('168 excel convertToTitle', () => {
  expect(convertToTitle(1)).toEqual('A');
  expect(convertToTitle(26)).toEqual('Z');
  expect(convertToTitle(27)).toEqual('AA');
  expect(convertToTitle(28)).toEqual('AB');
  expect(convertToTitle(52)).toEqual('AZ');
  expect(convertToTitle(701)).toEqual('ZY');
});
