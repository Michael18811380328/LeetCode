export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "test/**",
      "build/**",
      "scripts/**"
    ]
  },
  {
    rules: {
      "no-console": "warn",
      "indent": ["error", 2]
    }
  }
];
