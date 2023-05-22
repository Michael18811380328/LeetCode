function chunk(arr: any[], size: number): any[][] {
  if (arr.length === 0) return [];
  const matrix: any[] = [];
  while (arr.length > 0) {
    const tmp: any = arr.splice(0, size);
    matrix.push(tmp);
  }
  return matrix;
}

export {chunk};
