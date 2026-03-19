# @dps-es/eslint-config

ESLint & Prettier configuration for Web Development @ DPS.

Compatible with ESLint 9 flat config format.

# Installation

1. Add the following lines to your project's `.npmrc` file

```bash
@dps-es:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. Add the ENV variable GITHUB_TOKEN to your terminal (not .env file), with the value of a Github personal access token with package:read permission granted (https://github.com/settings/tokens).

3. Run `npm i -D @dps-es/eslint-config eslint@9 prettier@3`

# Configuration

Create an `eslint.config.js` file in your project root:

This module exports 2 different configurations (prod & dev):

```js
// eslint.config.js — Production rules (strict)
const dpsConfig = require('@dps-es/eslint-config');

module.exports = [...dpsConfig];
```

```js
// eslint.config.js — Dev rules (turns some errors into warnings: console, debugger, unused vars)
const dpsDevConfig = require('@dps-es/eslint-config/dev');

module.exports = [...dpsDevConfig];
```

You can extend the config with additional rules:

```js
const dpsConfig = require('@dps-es/eslint-config');

module.exports = [
  ...dpsConfig,
  {
    rules: {
      // your custom overrides
    },
  },
];
```

## Migration from v7 (ESLint 8)

1. Delete your `.eslintrc` / `.eslintrc.json` file
2. Remove the `eslintConfig` and `babel` fields from `package.json`
3. Uninstall legacy peer dependencies:
   ```bash
   npm uninstall @babel/core @babel/eslint-parser @babel/preset-env eslint-config-standard eslint-config-prettier eslint-plugin-import eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-sonarjs
   ```
4. Create `eslint.config.js` as shown above
5. Only `eslint` and `prettier` are needed as devDependencies in your project
