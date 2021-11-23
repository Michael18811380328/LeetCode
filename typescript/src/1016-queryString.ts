function queryString(s: string, n: number): boolean {
  for (let i:number = 1; i <= n; i++) {
    let current:string = i.toString(2);
    if (!s.includes(current)) return false;
  }
  return true;
};