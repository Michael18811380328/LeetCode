import { frequencySort } from '../src/0451-frequency-sort';

test('451', () => {
  expect(frequencySort('tree')).toEqual('eetr');
  expect(frequencySort('cccaaa')).toEqual('cccaaa');
});
