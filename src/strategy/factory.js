const Simple = require('./simple');
const MACD = require('./simpleMACD');
const Dema = require('./dema');

exports.create = function(type, data) {
  switch (type) {
    case 'macd':
      return new MACD(data);
    case 'simple':
      return new Simple(data);
    case 'dema':
      return new Dema(data);
    default:
      return new MACD(data);
  }
};
