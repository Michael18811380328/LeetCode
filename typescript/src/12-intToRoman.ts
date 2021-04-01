function intToRoman(num: number):string {
  const res : number[] = [];
  res[0] = (num - (num % 1000)) / 1000;
  num %= 1000;
  res[1] = (num - (num % 500)) / 500;
  num %= 500;
  res[2] = (num - (num % 100)) / 100;
  num %= 100;
  res[3] = (num - (num % 50)) / 50;
  num %= 50;
  res[4] = (num - (num % 10)) / 10;
  num %= 10;
  res[5] = (num - (num % 5)) / 5;
  num %= 5;
  res[6] = num;

  let result:string = '';

  while (res[0] > 0) {
    result += 'M';
    res[0]--;
  }

  if (res[2] === 4) {
    result = res[1] === 1 ? `${result}CM` : `${result}CD`;
  } else {
    if (res[1] === 1) {
      result += 'D';
    }
    while (res[2] > 0) {
      result += 'C';
      res[2]--;
    }
  }

  if (res[4] === 4) {
    result = res[3] === 1 ? `${result}XC` : `${result}XL`;
  } else {
    if (res[3] === 1) {
      result += 'L';
    }
    while (res[4] > 0) {
      result += 'X';
      res[4]--;
    }
  }

  if (res[6] === 4) {
    result = res[5] === 1 ? `${result}IX` : `${result}IV`;
  } else {
    if (res[5] === 1) {
      result += 'V';
    }
    while (res[6] > 0) {
      result += 'I';
      res[6]--;
    }
  }
  return result;
}

export { intToRoman };
