/**
 * HelloWorld.test.ts
 */
import { hello, add } from '../src/HelloWorld';

test('hello world test', () => {
    expect(hello()).toBe(true);
});

test('add function', () => {
    expect(add(100, 200)).toBe(300);
});