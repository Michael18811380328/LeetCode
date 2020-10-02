import { frequencySort } from '../finished4/451-frequency-sort';

test('187', () => {
  expect(frequencySort('tree')).toEqual('eetr');
  expect(frequencySort('cccaaa')).toEqual('cccaaa');
});
