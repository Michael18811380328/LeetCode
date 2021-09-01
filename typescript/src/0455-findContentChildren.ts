function findContentChildren(g: number[], s: number[]): number {
  const gLen: number = g.length;
  const sLen: number = s.length;
  if (gLen === 0 || sLen === 0) return 0;
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);
  let result = 0;
  let index = 0;
  for (let i = 0; i < sLen; i++) {
    if (s[i] >= g[index]) {
      index++;
      result++;
    }
  }
  return result;
}
