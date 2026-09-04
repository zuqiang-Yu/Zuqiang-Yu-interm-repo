import prettier from 'eslint-config-prettier';

export default [
  {
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
  prettier,
];
