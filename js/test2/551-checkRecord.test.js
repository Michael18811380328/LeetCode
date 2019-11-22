import { checkRecord } from '../finished2/551-checkRecord';

test('551-checkRecord', () => {
  expect(checkRecord('PPALLP')).toEqual(true);
  expect(checkRecord('PPALLL')).toEqual(false);
  expect(checkRecord('AA')).toEqual(false);
});
