const sdk = require('api')('https://api.example.com/alternate-server.json');

sdk.server('http://dev.local/v2');
sdk.post('/global')
  .then(res => console.log(res))
  .catch(err => console.error(err));
