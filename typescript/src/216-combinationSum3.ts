function combinationSum3(k: number, n: number): number[][] {
  let list:any = [];
  let tmp:any = [];
  var backTrack = function(tmp:number[], list:number[]): any {
    if (tmp.length > k) {
      return;
    }
    if (tmp.length === k) {
      let sum:number = tmp.reduce((a, b) => a + b, 0);
      if (sum === n) {
        let arr:any = [...tmp];
        list.push(arr);
      }
      return;
    }
    let start:number = tmp[tmp.length - 1] || 0;
    for (let i:number = start + 1; i < 10; i++) {
      tmp.push(i);
      backTrack(tmp, list);
      tmp.pop();
    }
  }
  backTrack(tmp, list);
  return list;
};