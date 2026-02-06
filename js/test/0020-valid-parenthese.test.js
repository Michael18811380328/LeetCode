import { isValid, isValid2 } from '../src/0020-valid-parenthese';

describe('isValid', () => {
  test('basic valid cases', () => {
    expect(isValid('{}(){}[]')).toEqual(true);
    expect(isValid('{[]}')).toEqual(true);
    expect(isValid('([)]')).toEqual(false);
    expect(isValid('')).toEqual(true);
  });
  
  test('nested parentheses', () => {
    expect(isValid('{[()]}')).toEqual(true);
    expect(isValid('{{{[()]}}}')).toEqual(true);
    expect(isValid('([{}])')).toEqual(true);
  });
  
  test('invalid cases', () => {
    expect(isValid('(')).toEqual(false);
    expect(isValid(')')).toEqual(false);
    expect(isValid('{')).toEqual(false);
    expect(isValid('}')).toEqual(false);
    expect(isValid('[')).toEqual(false);
    expect(isValid(']')).toEqual(false);
    expect(isValid('(]')).toEqual(false);
    expect(isValid('{)')).toEqual(false);
    expect(isValid('[}')).toEqual(false);
  });
  
  test('mismatched parentheses', () => {
    expect(isValid('([)]')).toEqual(false);
    expect(isValid('{[}]')).toEqual(false);
    expect(isValid('({[}])')).toEqual(false);
  });
  
  test('edge cases', () => {
    expect(isValid('()')).toEqual(true);
    expect(isValid('[]')).toEqual(true);
    expect(isValid('{}')).toEqual(true);
    expect(isValid('()[]{}')).toEqual(true);
    expect(isValid('([{}])')).toEqual(true);
  });
  
  test('long valid strings', () => {
    const longValid = '()'.repeat(1000);
    expect(isValid(longValid)).toEqual(true);
    
    const nestedValid = '{'.repeat(500) + '}'.repeat(500);
    expect(isValid(nestedValid)).toEqual(true);
  });
});

describe('isValid2', () => {
  test('basic valid cases', () => {
    expect(isValid2('{}(){}[]')).toEqual(true);
    expect(isValid2('{[]}')).toEqual(true);
    expect(isValid2('([)]')).toEqual(false);
    expect(isValid2('')).toEqual(true);
  });
  
  test('nested parentheses', () => {
    expect(isValid2('{[()]}')).toEqual(true);
    expect(isValid2('{{{[()]}}}')).toEqual(true);
    expect(isValid2('([{}])')).toEqual(true);
  });
  
  test('invalid cases', () => {
    expect(isValid2('(')).toEqual(false);
    expect(isValid2(')')).toEqual(false);
    expect(isValid2('{')).toEqual(false);
    expect(isValid2('}')).toEqual(false);
    expect(isValid2('[')).toEqual(false);
    expect(isValid2(']')).toEqual(false);
    expect(isValid2('(]')).toEqual(false);
    expect(isValid2('{)')).toEqual(false);
    expect(isValid2('[}')).toEqual(false);
  });
  
  test('edge cases', () => {
    expect(isValid2('()')).toEqual(true);
    expect(isValid2('[]')).toEqual(true);
    expect(isValid2('{}')).toEqual(true);
    expect(isValid2('()[]{}')).toEqual(true);
    expect(isValid2('([{}])')).toEqual(true);
  });
});
