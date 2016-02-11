var range = require('../ds').range;
module.exports = range(10, 0).map(function () {
  return [['a', 'b', Math.round(Math.random() * 1000) * 2],
          ['b', 'c', Math.round(Math.random() * 1000)],
          ['a', 'd', Math.round(Math.random() * 1000) / 2],
          ['d', 'c', Math.round(Math.random() * 1000)],
          ['b', 'e', Math.round(Math.random() * 1000)],
          ['d', 'e', Math.round(Math.random() * 1000)]];
});
