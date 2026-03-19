const prodConfig = require('./index.js');

module.exports = [
  ...prodConfig,
  {
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-vars': 'warn',
    },
  },
];
