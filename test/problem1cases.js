// makes an array of randomized arrays
// each has random lengths and each element has a random value
var range = require('../ds').range;
module.exports = range(15, 0).map(function () {
  return range(Math.ceil(Math.random() * 15), 0).map(function () {
    return Math.floor(Math.random() * 25);
  });
});
