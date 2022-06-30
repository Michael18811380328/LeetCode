function truncateSentence(s: string, k: number): string {
  const sList: string[] = s.split(' ');
  return sList.slice(0, k).join(' ');
}

export {truncateSentence};
