module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Turns off all rules that are unnecessary or might conflict with Prettier - eslint-config-prettier
    'prettier',
  ],
  // .files and .directory's are ignored by default
  ignorePatterns: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    // Basic rules
    'prefer-const': 'error',
  },
};
