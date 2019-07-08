module.exports = {
  extends: 'standard',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-console': ['off'],
    'no-var': 2,
    'prefer-const': 1,
    'object-property-newline': 'warn',
    'prefer-arrow-callback': 'error',
    'space-before-function-paren': 'off',
    'comma-dangle': ['error', 'always-multiline']
  }
};
