function minimumRecolors(blocks: string, k: number): number {
  const len: number = blocks.length;
  if (len === k) {
    let min = 0;
    for (let i = 0; i < len; i++) {
      const item = blocks[i];
      if (item === 'W') min++;
    }
    return min;
  }
  let tmp = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === 'W') tmp++;
  }
  let min: number = tmp;
  if (min === 0) return 0;
  for (let i: number = k; i < len; i++) {
    if (blocks[i] === 'W') tmp++;
    if (blocks[i - k] === 'W') tmp--;
    if (tmp === 0) return 0;
    min = tmp < min ? tmp : min;
  }
  return min;
}

export {minimumRecolors};
