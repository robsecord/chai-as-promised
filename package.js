Package.describe({
  name: 'robsecord:chai-as-promised',
  version: '0.0.1',
  summary: '',
  git: 'https://github.com/robsecord/chai-as-promised',
  documentation: 'README.md'
});

Npm.depends({
  "chai-as-promised": "6.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ecmascript');
  api.use('practicalmeteor:chai');
  
  api.addFiles('.npm/package/node_modules/chai-as-promised/lib/chai-as-promised.js');
  api.addFiles('install-chaiAsPromised.js');
});
