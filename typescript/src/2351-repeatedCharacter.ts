function repeatedCharacter(s: string): string {
  const dict: {} = {};
  for (let i = 0; i < s.length; i++) {
    const key: string = s[i];
    if (dict[key]) {
      return key;
    } else {
      dict[key] = true;
    }
  }
  return '';
}

export {repeatedCharacter};
