const prodConfig = require('./.eslintrc.json');

prodConfig.rules['no-console'] = 'warn';
prodConfig.rules['no-debugger'] = 'warn';
prodConfig.rules['no-unused-vars'] = 'warn';
prodConfig.rules['sonarjs/no-duplicate-string'] = 'warn';
prodConfig.rules['sonarjs/cognitive-complexity'] = 'warn';

module.exports = prodConfig;
