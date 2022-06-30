function queryString(s: string, n: number): boolean {
  for (let i = 1; i <= n; i++) {
    const current: string = i.toString(2);
    if (!s.includes(current)) return false;
  }
  return true;
}

export {queryString};
