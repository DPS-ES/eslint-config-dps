# eslint-config-dps

ESlint &amp; Prettier configuration for VS Code, compatible with Babel parser (using preset-env)

# Installation

Add the following line to your proyect's `.npmrc` file

`@dps-es:registry=https://npm.pkg.github.com`

Sign in into the Github NPM resgistry via the command line with a personal access token (https://github.com/settings/tokens):

`npm login --scope=@dps-es --registry=https://npm.pkg.github.com`

Finally, run to install:

`npm i -D @dps-es/eslint-config-dps`

# .eslintrc

Basic `.eslintrc` example:

```jsonc
{
  "extends": "dps", // For prod rules
  "extends": "dps/dev" // For dev rules (turns some errors into warnings -> Console, debugger, unused)
}
```
