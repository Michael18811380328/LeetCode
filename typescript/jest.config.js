module.exports = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  // preset: 'ts-jest',
  roots: [
    '<rootDir>/test',
  ],
  testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    "\\.js$": ['babel-jest', {rootMode: "upward"}],
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
