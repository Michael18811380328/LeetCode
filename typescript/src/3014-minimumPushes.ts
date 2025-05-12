function minimumPushes(word: string): number {
  const len: number = word.length;
  if (len <= 8) {
    return len;
  } else if (len <= 16) {
    return 8 + (len - 8) * 2;
  } else if (len <= 24) {
    return 8 + 8 * 2 + (len - 16) * 3;
  } else {
    return 8 + 8 * 2 + 8 * 3 + (len - 24) * 4;
  }
}

export {minimumPushes};
