const neostandard = require('neostandard');
const sonarjs = require('eslint-plugin-sonarjs');
const react = require('eslint-plugin-react');
const prettierRecommended = require('eslint-plugin-prettier/recommended');
const globals = require('globals');

module.exports = [
  {
    ignores: ['public/**', 'node_modules/**', 'package-lock.json'],
  },

  // Standard rules (replaces eslint-config-standard, includes n + promise plugins)
  ...neostandard({ noStyle: true }),

  // SonarJS recommended rules
  sonarjs.configs.recommended,

  // Prettier (includes eslint-config-prettier to disable conflicting rules)
  prettierRecommended,

  // Custom DPS configuration
  {
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        createElement: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          printWidth: 80,
        },
      ],
      'arrow-body-style': 'error',
      'prefer-arrow-callback': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
      'react/jsx-uses-vars': 'error',
      'sonarjs/no-duplicate-string': 'off',
      'sonarjs/cognitive-complexity': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/regex-complexity': 'off',
      'sonarjs/no-session-cookies-on-static-assets': 'off',
      'sonarjs/no-nested-conditional': 'off',
      'sonarjs/pseudo-random': 'off',
      'sonarjs/todo-tag': 'off',
      'sonarjs/no-ignored-exceptions': 'off',
      'sonarjs/no-nested-functions': 'off',
    },
  },
];
