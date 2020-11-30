import { readBinaryWatch } from './401-readBinaryWatch';

test('401-readBinaryWatch', () => {
  expect(readBinaryWatch(0)).toEqual(['0:00']);
  expect(readBinaryWatch(1)).toEqual(['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32']);
  expect(readBinaryWatch(10)).toEqual([]);
});
