# @dps-es/eslint-config

ESlint &amp; Prettier configuration for VS Code, compatible with Babel parser (using preset-env)

# Installation

1. Add the following lines to your proyect's `.npmrc` file

```bash
@dps-es:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

2. Add the ENV variable NPM_TOKEN to your terminal (not .env file), with the valuea of a Github personal access token with package:read permission granted (https://github.com/settings/tokens).

3. Run `npm i -D @dps-es/eslint-config`

# .eslintrc

Basic `.eslintrc` examples:

```jsonc
// For prod rules
{
  "extends": "@dps-es"
}
```

```jsonc
// For dev rules (turns some errors into warnings -> Console, debugger, unused)
{
  "extends": "@dps-es/eslint-config/dev"
}
```
