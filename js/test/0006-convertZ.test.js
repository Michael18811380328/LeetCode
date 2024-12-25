import { convert } from '../src/0006-convertZ';

describe('0006-convertZ', () => {
  it('s = "PAYPALISHIRING", numRows = 3', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  });
  it('s = "PAYPALISHIRING", numRows = 4', () => {
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  });
  it('s = "A", numRows = 1', () => {
    expect(convert('A', 1)).toBe('A');
  });
});
