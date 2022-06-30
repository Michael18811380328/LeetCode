function checkIfPangram(sentence: string): boolean {
  const len: number = sentence.length;
  // 如果长度小于26，那么一定不满足
  if (len < 26) {
    return false;
  }
  const dict: object = {};
  let timer = 0;
  // 然后遍历句子，使用一个对象存储，最后看键的长度是多少
  for (let i = 0; i < len; i++) {
    const key: string = sentence[i];
    if (!dict[key]) {
      dict[key] = true;
      timer++;
    }
    if (timer === 26) {
      return true;
    }
  }
  return timer === 26;
}

export {checkIfPangram};
