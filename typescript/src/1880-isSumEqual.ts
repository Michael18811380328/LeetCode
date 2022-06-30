// 84 ms, 在所有 TypeScript 提交中击败了100.00%
function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string
): boolean {
  const getNum = (str: string): number => {
    let res = 0;
    while (str.length > 0) {
      if (str[0] === 'a' && res === 0) {
        str = str.slice(1);
      } else {
        const curr: string = str[0];
        const currNum: number = curr.charCodeAt(0) - 97;
        res = res * 10 + currNum;
        str = str.slice(1);
      }
    }
    return res;
  };
  return getNum(firstWord) + getNum(secondWord) === getNum(targetWord);
}

export {isSumEqual};
