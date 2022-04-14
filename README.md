# eslint-config-dps

ESlint &amp; Prettier configuration for VS Code, compatible with Babel parser (using preset-env)

# Installation

`npm i -D github:DPS-ES/eslint-config-dps`

# .eslintrc

Basic `.eslintrc` example:

```jsonc
{
  "extends": "dps",    // For prod rules
  "extends": "dps/dev" // For dev rules (turns some errors into warnings -> Console, debugger, unused)
}
```
