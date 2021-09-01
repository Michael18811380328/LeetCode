function combinationSum3(k: number, n: number): number[][] {
  const list: any = [];
  const tmp: any = [];
  var backTrack = function (tmp: number[], list: number[]): any {
    if (tmp.length > k) {
      return;
    }
    if (tmp.length === k) {
      const sum: number = tmp.reduce((a, b) => a + b, 0);
      if (sum === n) {
        const arr: any = [...tmp];
        list.push(arr);
      }
      return;
    }
    const start: number = tmp[tmp.length - 1] || 0;
    for (let i: number = start + 1; i < 10; i++) {
      tmp.push(i);
      backTrack(tmp, list);
      tmp.pop();
    }
  };
  backTrack(tmp, list);
  return list;
}
