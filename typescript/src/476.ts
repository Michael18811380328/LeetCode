// 80 ms, 在所有 typescript 提交中击败了77.78%
function findComplement1(num: number): number {
  let str:string = num.toString(2);
  let res:string = '';
  let i:number = 0;
  for (; i < str.length; i++) {
    if (str[i] == '0') {
      res += '1'
    } else {
      res += '0';
    }
  }
  return parseInt(res, 2);
};

// 92 ms, 在所有 typescript 提交中击败了11.11%
function findComplement2(num: number): number {
  let str:string = num.toString(2);
  str = str.replace(/0/g, '2');
  str = str.replace(/1/g, '0');
  str = str.replace(/2/g, '1');
  return parseInt(str, 2);
};
