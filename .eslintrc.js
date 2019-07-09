module.exports = {
  extends: ['standard', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "printWidth": 80
      }
    ],
    "max-len": [
      "error",
      {
        "code": 80,
        "tabWidth": 2,
        "comments": 100,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ],
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
    'comma-dangle': ['error', 'always-multiline'],
  },
  "plugins": ["prettier"]
};
