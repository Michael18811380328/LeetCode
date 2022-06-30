function largestPerimeter(A: number[]): number {
  const isTriangle = function (a: number, b: number, c: number): boolean {
    return a + b + c > 2 * Math.max(a, b, c);
  };
  const sum = function (a: number, b: number, c: number): number {
    return a + b + c;
  };
  const len: number = A.length;
  if (len === 3) {
    if (isTriangle(A[0], A[1], A[2])) {
      return sum(A[0], A[1], A[2]);
    } else {
      return 0;
    }
  }
  A.sort((a, b) => b - a);
  while (!isTriangle(A[0], A[1], A[2]) && A.length > 2) {
    A.shift();
  }
  return A.length > 2 ? sum(A[0], A[1], A[2]) : 0;
}

export {largestPerimeter};
