import { RecentCounter } from '../src/0933-RecentCounter';

describe('RecentCounter', () => {
  test('should count recent requests correctly', () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(100)).toBe(2);
    expect(counter.ping(3001)).toBe(3);
    expect(counter.ping(3002)).toBe(3); // 3001 在范围内
  });

  test('should handle requests outside time window', () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(100)).toBe(2);
    expect(counter.ping(3001)).toBe(3);
    expect(counter.ping(3201)).toBe(2); // 100 被移出
  });

  test('should handle exact boundary cases', () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(3001)).toBe(2); // 1 还在范围内
    expect(counter.ping(3002)).toBe(2); // 1 被移出
  });

  test('should handle large time gaps', () => {
    const counter = new RecentCounter();
    expect(counter.ping(1)).toBe(1);
    expect(counter.ping(5000)).toBe(1); // 1 被移出
  });

  test('should handle sequential requests', () => {
    const counter = new RecentCounter();
    for (let i = 1; i <= 10; i++) {
      expect(counter.ping(i * 100)).toBe(i);
    }
  });
});
