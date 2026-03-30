const neostandard = require('neostandard');
const sonarjs = require('eslint-plugin-sonarjs');
const prettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  ...neostandard({
    // Pasamos estas configuraciones por dentro de neostandar, pero son globales de eslint, podrían estar fuera
    ignores: ['public/**', 'node_modules/**', 'package-lock.json'],
    env: ['browser', 'node'],
    globals: { createElement: 'readonly' },
    noStyle: true, // Deshabilitado porque de estas reglas ya se encarga prettier
  }),
  sonarjs.configs.recommended,
  prettierRecommended, // Debe ir la úiltima, para que sus reglas tengan prioridad sobre las de los otros plugins
  {
    plugins: { react: neostandard.plugins.react },
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
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
      // Esta regla dejará de hacer falta en Eslint 10: https://eslint.org/docs/latest/use/migrate-to-10.0.0#jsx-reference-tracking
      // Si quitamos la regla, quitar también el plugin react, que es el único que la usa
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
      'sonarjs/no-unused-vars': 'off',
      'sonarjs/no-nested-template-literals': 'off',
      'sonarjs/unused-imports': 'off',
    },
  },
];
