function truncateSentence(s: string, k: number): string {
  let sList:string[] = s.split(' ');
  return sList.slice(0, k).join(' ');
};