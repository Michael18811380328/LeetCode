module.exports = {
  roots: ['<rootDir>/test'],
  testRegex: 'test/(.+)\.test\.(jsx?|tsx?)$',
  transform: {
    '\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
};
