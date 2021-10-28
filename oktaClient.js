const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-76014703-admin.okta.com/',
  token: '00BAHmVJDzUyMD9krf5c3iPmzXy631v2WAdrd7ai36'
});

module.exports = client;