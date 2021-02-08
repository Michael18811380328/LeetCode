import { restoreIpAddresses } from '../src/93-restoreIpAddresses';

test('80', () => {
  const s1 = '25525511135';
  const s2 = '0000';
  const s3 = '010010';
  const s4 = '101023';
  const s5 = '1111';
  const s6 = '2552551113';
  expect(restoreIpAddresses(s1)).toEqual(['255.255.11.135', '255.255.111.35']);
  expect(restoreIpAddresses(s2)).toEqual(['0.0.0.0']);
  expect(restoreIpAddresses(s3)).toEqual(['0.10.0.10', '0.100.1.0']);
  expect(restoreIpAddresses(s4)).toEqual(['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3']);
  expect(restoreIpAddresses(s5)).toEqual(['1.1.1.1']);
  expect(restoreIpAddresses(s6)).toEqual(['255.25.51.113', '255.255.1.113', '255.255.11.13', '255.255.111.3']);
});
