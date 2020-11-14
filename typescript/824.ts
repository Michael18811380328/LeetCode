// 92 ms
// , 在所有 typescript 提交中击败了
// // 100.00%
function toGoatLatin(S: string): string {
  let arr:string[] = S.split(' ');
  const len:number = arr.length;
  let i:number = 0;
  for (; i < len; i++) {
    let item:string = arr[i];
    let first:string = item[0].toLowerCase();
    if (first !== 'a' && first !== 'e' && first !== 'i' && first !== 'o' && first !== 'u') {
      item = item.slice(1, item.length) + item[0];
    }
    item = item + 'ma';
    let newStrLen:number = item.length + i + 1;
    item = item.padEnd(newStrLen, 'a');
    arr[i] = item;
  }
  return arr.join(' ');
};