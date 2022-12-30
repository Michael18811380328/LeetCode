function largestGoodInteger(num: string): string {
  let tmp = '';
  for (let i = 2; i < num.length; i++) {
    if (num[i] === num[i - 1] && num[i] === num[i - 2]) {
      if (!tmp || Number(num[i]) > Number(tmp)) {
        tmp = num[i];
      }
    }
  }
  if (tmp === '') return '';
  return tmp + tmp + tmp;
}

export {largestGoodInteger};
