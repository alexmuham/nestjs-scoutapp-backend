module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    //'airbnb-typescript', //TODO fixed
    'prettier',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    'prettier/prettier': 'error',
    'max-classes-per-file': 'off',
    'no-console': 'error'
  },
};
