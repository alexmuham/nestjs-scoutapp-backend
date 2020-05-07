module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'default-case': 'off',
    'consistent-return': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/exhaustive-deps': 'off',
    // '@typescript-eslint/no-unused-vars': 'off',
    'no-useless-return': 'off',
    'no-await-in-loop': 'off',
    'import/no-cycle': 'error',
    'no-console': 'error',
    'react-native/no-inline-styles': 'error'
  },
  plugins: ['@typescript-eslint', 'prettier'],
};
