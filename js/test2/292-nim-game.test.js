import { canWinNim } from '../finished2/292-nim-game';

test('292-nim-game', () => {
  expect(canWinNim(0)).toEqual(false);
  expect(canWinNim(4)).toEqual(false);
  expect(canWinNim(20)).toEqual(false);
  expect(canWinNim(5)).toEqual(true);
});
