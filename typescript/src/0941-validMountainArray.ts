function validMountainArray(A: number[]): boolean {
  const len: number = A.length;
  if (len < 3 || A[0] > A[1]) {
    return false;
  }
  let reach = false;
  let i = 0;
  for (; i < len - 1; i++) {
    if (A[i] < A[i + 1]) {
      if (reach) {
        return false;
      }
      continue;
    } else if (A[i] === A[i + 1]) {
      return false;
    } else if (A[i] > A[i + 1]) {
      if (!reach) {
        reach = true;
      }
    }
  }
  return reach;
}

export {validMountainArray};
