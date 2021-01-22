function complexNumberMultiply(a: string, b: string): string {
  let index:number = a.indexOf('+');
  let a1:number = parseInt(a.slice(0, index));
  let a2:number = parseInt(a.slice(index + 1, a.length - 1));
  index = b.indexOf('+');
  let b1:number = parseInt(b.slice(0, index));
  let b2:number = parseInt(b.slice(index + 1, b.length - 1));
  let c1:number = a1 * b1 + a2 * b2 * -1;
  let c2:number = a2 * b1 + a1 * b2;
  return `${c1}+${c2}i`;
};