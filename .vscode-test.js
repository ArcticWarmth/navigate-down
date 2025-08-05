const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
  {
    files: 'test/**/*.test.js',
  }
  // you can specify additional test configurations, too
]);
