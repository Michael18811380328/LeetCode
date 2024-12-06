module.exports = {
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  rules: {
    '@typescript-eslint/prefer-const': 'off',
  },
  "setupFilesAfterEnv": ["<rootDir>/scripts/jestSetup.js"],
};
