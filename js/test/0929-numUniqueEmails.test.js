import { numUniqueEmails } from '../src/0929-numUniqueEmails';

describe('numUniqueEmails', () => {
  test('should count unique emails correctly', () => {
    const emails = [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com'
    ];
    expect(numUniqueEmails(emails)).toBe(2);
  });

  test('should handle dot in local name', () => {
    const emails = [
      'a.b@example.com',
      'ab@example.com'
    ];
    expect(numUniqueEmails(emails)).toBe(1);
  });

  test('should handle plus in local name', () => {
    const emails = [
      'test+mail@example.com',
      'test@example.com'
    ];
    expect(numUniqueEmails(emails)).toBe(1);
  });

  test('should handle combination of dot and plus', () => {
    const emails = [
      't.est+mail@example.com',
      'test@example.com',
      'test+mail@example.com'
    ];
    expect(numUniqueEmails(emails)).toBe(1);
  });

  test('should handle different domains', () => {
    const emails = [
      'test@example.com',
      'test@example.org',
      'test@example.net'
    ];
    expect(numUniqueEmails(emails)).toBe(3);
  });

  test('should handle empty array', () => {
    expect(numUniqueEmails([])).toBe(0);
  });

  test('should handle single email', () => {
    const emails = ['test@example.com'];
    expect(numUniqueEmails(emails)).toBe(1);
  });

  test('should handle complex cases', () => {
    const emails = [
      'test.email+alex@leetcode.com',
      'test.email.leet+alex@code.com',
      'testemail@leetcode.com'
    ];
    expect(numUniqueEmails(emails)).toBe(2);
  });
});