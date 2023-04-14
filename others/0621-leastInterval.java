public int leastInterval(char[] tasks, int n) {
  int[] hash = new int[26];
  for (int i = 0; i < tasks.length; ++i) {
    hash[tasks[i] - 'A'] += 1;
  }
  Arrays.sort(hash);
  int minLen = (n+1) * (hash[25] - 1) + 1;
  for (int i = 0; i <= 24; i++) {
    if (hash[i] == hash[25]) {
      ++minLen;
    }
  }
  return Math.max(minLen, tasks.length);
}
