const prodConfig = require('./.eslintrc.json');

prodConfig.rules['no-console'] = 'warn';
prodConfig.rules['no-debugger'] = 'warn';
prodConfig.rules['no-unused-vars'] = 'warn';

module.exports = prodConfig;
