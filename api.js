const path = require('path');
const maybe = require('call-me-maybe');
require('colors');

const utils = require('./utils/utils');
const console = require('./utils/console');
const invoke = require('./lib/invoke');

const localLinksPath = path.join(process.cwd(), '/node_modules/api/data/links.json');

module.exports.run = (action, d, cb) => {
  if (this.key && this.key.startsWith('demo')) {
    return maybe(cb, new Promise((resolve) => {
      console.log('This is a demo API key!'.red);
      console.log('To get your own, run:');
      console.log('');
      console.log(`  ${'$'.grey} ${'api signup'.yellow}`);
      console.log('');

      return resolve();
    }));
  }

  // Can't reassign params
  let data = d;
  let callback = cb;

  // If no data is passed in, default to {}
  if (typeof data === 'function') {
    callback = data;
    data = {};
  } else if (!data) {
    data = {};
  }

  // Don't call api if there is a local link
  const localLinks = utils.fileExists(localLinksPath) ? require(localLinksPath) : {};
  if (localLinks[this.service]) {
    const handler = require(path.join(localLinks[this.service], '/handler.js'));
    const event = {
      name: action,
      data,
    };

    return maybe(callback, new Promise((resolve, reject) => {
      handler.go(event, undefined, (err, response) => {
        if (err) return reject(err);

        return resolve(response);
      });
    }));
  }

  return maybe(callback, new Promise((resolve, reject) => {
    return invoke(this.key, this.service, action, data).then((response) => {
      return resolve(response.body);
    }).catch((err) => {
      return reject(err.response.body);
    });
  }));
};

module.exports.config = (apiKey) => {
  this.key = apiKey;
  return (service) => {
    this.service = service;
    return this;
  };
};

/*
 * docsTest: This is an example for docs.test.js
 */
