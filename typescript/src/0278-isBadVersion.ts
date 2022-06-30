function solution(isBadVersion: any) {
  return function (n: number): number {
    if (n === 1) return n;
    let start = 0;
    let end: number = n;
    let middle: number = Math.ceil((start + end) / 2);
    while (start < end - 1) {
      if (isBadVersion(middle)) {
        end = middle;
      } else {
        start = middle;
      }
      middle = Math.ceil((start + end) / 2);
    }
    return middle;
  };
}

export {solution};
